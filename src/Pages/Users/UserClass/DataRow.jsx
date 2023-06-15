import Swal from "sweetalert2";


const DataRow = ({item, setReloadClass, reloadClass} ) => {
     const {_id, classImage, className, instructorName, availableSeats, price, studentEmail, classId } = item;


     const deleteAfterPayment = () => {
      fetch(`https://dancing-guru-server.vercel.app/selectedCls/${_id}`, {
              method:'DELETE'
            })
            .then( res => res.json())
            .then (data => {
              if(data.deletedCount > 0){
                setReloadClass(!reloadClass)
      
              }
            })
     };



     const payment = () => {

      const paidClass = {
        classImage,
        className,
        instructorName,
        availableSeats,
        price,
        studentEmail,
        payment:'paid',
        classId
      }

      fetch("https://dancing-guru-server.vercel.app/paidCls", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(paidClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          deleteAfterPayment()
          Swal.fire("Done", "payment successful", "success");
           
        }
      });
     }


     const handleDelete = () => {
        Swal.fire({
          title: "Are you sure?",
          text: "Want to Delete this Class?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#007700",
          confirmButtonText: "Yes, Delete",
        }).then((result) => {
          if (result.isConfirmed) {
            
            fetch(`https://dancing-guru-server.vercel.app/selectedCls/${_id}`, {
              method:'DELETE'
            })
            .then( res => res.json())
            .then (data => {
              if(data.deletedCount > 0){
                setReloadClass(!reloadClass)
                Swal.fire({
                  title: "Done !",
                  text: "Class Delete successful",
                  icon: "success",
                });
              }
            })
            
          }
        });
      
       }
    return (
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20 md:w-24 md:h-24">
                <img src={classImage} alt="Class image" />
              </div>
            </div>
            <div>
              <div className="font-bold">{className}</div>
            </div>
          </div>
        </td>
        <td>{instructorName}</td>
        
        <td><button onClick={handleDelete}  className="btn bg-red-500 hover:bg-red-600">Delete</button></td>
        <th>
         <button onClick={payment} className="btn btn-primary" > Pay</button>
        </th>
      </tr>
    );
};

export default DataRow;