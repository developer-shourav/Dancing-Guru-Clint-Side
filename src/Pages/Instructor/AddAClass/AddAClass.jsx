import { useContext } from "react";
import { ScrollRestoration } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
import {HiOutlineViewGridAdd} from 'react-icons/hi';
const AddAClass = () => {
      /* -------User Data -------- */
  const { user } = useContext(AuthContext);

  const handleAddToy = event => {
    /* ---------For Preventing default reload----------- */
    event.preventDefault()
    const form = event.target;

    const classImage = form.classImage.value;
    const className = form.className.value;
    const availableSeats = parseFloat(form.availableSeats.value);
    const instructorName = user?.displayName;
    const instructorEmail = user?.email;
    const price = parseFloat(form.price.value);
    const status ='pending';
    const totalStudents = 0;
    const instructorImage = user?.photoURL;


    const addClass = {
      classImage,
      className,
      availableSeats,
      instructorName,
      instructorEmail,
      instructorImage,
      totalStudents,
      price,
      status
    };
   
   // Send Data to the server

   fetch('https://dancing-guru-server.vercel.app/addAClass', {
    method:'POST',
    headers: {
        'content-type':'application/json'
    },
    body: JSON.stringify(addClass)
 })
 
 .then( res => res.json())
 .then( data => {
    if(data?.acknowledged){
        Swal.fire(
            'Good job!',
            'Your Class Added Successfully!',
            'success'
          )
        form.reset()
    }
    
 })
    
  }

  
  return (
    <div className="mt-10 container mx-auto pb-40 px-3">
      <div className="text-center text-2xl  font-bold   flex items-center justify-center gap-3">
        {" "}
        <HiOutlineViewGridAdd className="inline-block text-2xl md:text-4xl text-[#E4444c]" />{" "}
        <span>Add A Class</span>
      </div>

      <div className="lg:w-10/12 mx-auto">

        <form onSubmit={handleAddToy}>
          

          {/* -----------From Data input ----------- */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* ------------First Container------------- */}
            <div className="md:w-1/2">
            <div className="form-control mb-3">
            <label className="label">
              <span className="label-text">Class Image URL</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                placeholder="Your Class Image URL"
                className="input input-bordered  w-full"
                name="classImage"
                required
              />
            </label>
          </div>
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <label className="input-group rounded-s ">
                  <input
                    type="text"
                    placeholder="Your Class Name"
                    className="input input-bordered  w-full"
                    name="className"
                    required
                  />
                </label>
              </div>


              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Available Seats</span>
                </label>
                <label className="input-group ">
                  <input
                    type="number"
                    min="1"
                    placeholder="Available Seats"
                    className="input input-bordered  w-full"
                    name="availableSeats"
                    required
                    
                  />
                </label>
              </div>

              
            </div>

            {/* ------------Second Container ----------------- */}
            <div className="md:w-1/2">
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <label className="input-group ">
                  <input
                    type="text"
                    placeholder="Input instructor Name"
                    className="input input-bordered  w-full"
                    name="instructorName"
                    value={user?.displayName}
                    readOnly
                    required
                  />
                </label>
              </div>

              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Instructor Email</span>
                </label>
                <label className="input-group ">
                  <input
                    type="email"
                    placeholder="Input instructor Email"
                    className="input input-bordered  w-full"
                    name="instructorEmail"
                    readOnly
                    value={user?.email}
                  />
                </label>
              </div>

              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <label className="input-group ">
                  <input
                    type="number"
                    min="1"
                    placeholder="Price ($)"
                    className="input input-bordered  w-full"
                    name="price"
                    required
                    
                  />
                </label>
              </div>

             
            </div>
          </div>
         
          <input className="btn  text-black bg-[#E4444c] hover:bg-[#e21e28fd] w-full mt-5" type="submit" value="ADD CLASS" />
        </form>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default AddAClass;