import { useEffect, useState } from "react";
import ManageClassesRow from "./ManageClassesRow";

const ManageClasses = () => {
    const [allClasses, setAllClasses] = useState([]);
    const [recalling, setRecalling] = useState(true);
    useEffect(() =>{
        fetch('https://dancing-guru-server.vercel.app/classes')
        .then( res => res.json())
        .then( data => setAllClasses(data))
    } , [recalling]);

    return ( 
        <div className=" w-full h-full  mx-auto ">
           <h2 className="font-bold text-2xl text-center mb-10 mt-5">Manage Classes</h2> 
           
           <div className="overflow-x-auto w-full  px-5">
        <table className="table w-full ">
          {/* head */}
          <thead className="font-extrabold ">
            <tr className="text-black">
             
              <th className=" text-[14px]">Class Name & Image</th>
              <th className=" text-[14px]">Instructor</th>
              <th className=" text-[14px]">Instructor email</th>
              <th className=" text-[14px]">Available seats</th>
              <th className=" text-[14px]">Price</th>
              <th className=" text-[14px]">Status</th>
              <th></th>
              <th></th>
              <th className=" text-[14px]">Feedback</th>
            </tr>
          </thead>
          <tbody className="text-[13px]" >
            {/* row 1 */}

            {/* --------show data -------------- */}
           {
            allClasses?.map( item  => <ManageClassesRow
            key={item._id} item={item} recalling={recalling} setRecalling={setRecalling}
            > 
            </ManageClassesRow>)
           }
            
          </tbody>
         
        </table>
      </div>

        </div>
    );
};

export default ManageClasses;