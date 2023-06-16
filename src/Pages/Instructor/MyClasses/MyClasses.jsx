import { useEffect, useState } from "react";
import MyClassesRow from "./MyClassesRow";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const MyClasses = () => {
     const {user} = useContext(AuthContext);
     const [instClasses, setInstClasses] = useState([]);

     useEffect(()=> {
        fetch(`https://dancing-guru-server.vercel.app/classes/${user?.email}`)
        .then( res => res.json())
        .then( data => setInstClasses(data))
     } ,[])

     console.log(instClasses);
     
    return ( 
        <div className=" w-full h-full  mx-auto ">
           <h2 className="font-bold text-2xl text-center mb-10 mt-5">My Classes</h2> 
           
           <div className="overflow-x-auto w-full  px-5">
        <table className="table w-full ">
          {/* head */}
          <thead className="font-extrabold ">
            <tr className="text-black">
             
              <th className=" text-[14px]">Class Name & Image</th>
              <th className=" text-[14px]">Instructor</th>
              <th className=" text-[14px]">Total Enrolled Students</th>
              <th className=" text-[14px]">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {/* --------show data -------------- */}
           {
            instClasses?.map( item  => <MyClassesRow
            key={item._id} item={item} 
            > 
            </MyClassesRow>)
           }
            
          </tbody>
         
        </table>
      </div>

        </div>
    );
};

export default MyClasses;