import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import EnrolledRow from "./EnrolledRow";

const EnrolledClass = () => {
    const [enrolleddClass , setEnrolledClass] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://dancing-guru-server.vercel.app/paidCls/${user?.email}`)
        .then( res => res.json())
        .then( data => setEnrolledClass(data))
    } , []);


    return (
        <div className=" w-full h-full  mx-auto ">
           <h2 className="font-bold text-2xl text-center mb-10 mt-5">My Enrolled Class</h2> 
           
           <div className="overflow-x-auto w-full  px-5">
        <table className="table w-full ">
          {/* head */}
          <thead className="font-extrabold ">
            <tr className="">
             
              <th className=" text-[16px]">Class Name & Image</th>
              <th className=" text-[16px]">Instructor</th>
              <th className=" text-[16px]">Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {/* --------show data -------------- */}
           {
            enrolleddClass?.map( item  => <EnrolledRow
            key={item._id} item={item} 
            > 
            </EnrolledRow>)
           }
            
          </tbody>
         
        </table>
      </div>

        </div>
    );
};

export default EnrolledClass;