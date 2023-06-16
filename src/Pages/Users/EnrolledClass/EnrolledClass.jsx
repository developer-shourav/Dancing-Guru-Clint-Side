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
           
        {
          enrolleddClass.length >= 1 &&    <div className="overflow-x-auto w-full  px-5">
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
        }
        {
           enrolleddClass.length == 0 && <div className="text-center text-gray-400 bg-stone-200 py-20 w-10/12 lg:w-8/12 mx-auto rounded-3xl  font-bold"> <h2 className=" text-2xl lg:text-4xl">No Class has Enrolled Yet</h2>
           <p className="font-normal mt-2 text-gray-600">Please make payment after selecting the class for Enrolment </p>
           </div>
        }

        </div>
    );
};

export default EnrolledClass;