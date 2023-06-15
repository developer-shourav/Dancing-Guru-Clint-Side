import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import DataRow from "./DataRow";

const UserClass = () => {
     const [selectedClass , setSelectedClass] = useState([]);
     const {user} = useContext(AuthContext);
     const [reloadClass, setReloadClass] = useState(true);
 
     useEffect(() => {
         fetch(`https://dancing-guru-server.vercel.app/selectedCls/${user?.email}`)
         .then( res => res.json())
         .then( data => setSelectedClass(data))
     } , [reloadClass]);


    return (
        <div className=" w-full h-full  mx-auto ">
           <h2 className="font-bold text-2xl text-center mb-10 mt-5">My Selected Class</h2> 
           
           <div className="overflow-x-auto w-full  px-5">
        <table className="table w-full ">
          {/* head */}
          <thead className="font-extrabold ">
            <tr className="">
             
              <th className=" text-[16px]">Class Name & Image</th>
              <th className=" text-[16px]">Instructor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {/* --------show data -------------- */}
           {
            selectedClass?.map( item  => <DataRow
            key={item._id} item={item} setReloadClass={setReloadClass} reloadClass={reloadClass}
            > 
            </DataRow>)
           }
            
          </tbody>
         
        </table>
      </div>

        </div>
    );
};

export default UserClass;