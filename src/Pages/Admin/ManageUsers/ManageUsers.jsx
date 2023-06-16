import { useEffect, useState } from "react";
import ManageUserRow from "./ManageUserRow";

const ManageUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [recalling, setRecalling] = useState(true);
    useEffect(() =>{
        fetch('https://dancing-guru-server.vercel.app/users')
        .then( res => res.json())
        .then( data => setAllUsers(data))
    } , [recalling]);

    return (
        <div className="w-full h-full mx-auto">
             <h2 className="font-bold text-2xl text-center mb-10 mt-5">Manage Classes</h2> 
               
           <div className="overflow-x-auto w-full  px-5">
        <table className="table w-full ">
          {/* head */}
          <thead className="font-extrabold ">
            <tr className="text-black">
             
              <th className=" text-[14px]">User Image</th>
              <th className=" text-[14px]">User Name</th>
              <th className=" text-[14px]">Email</th>
              <th className=" text-[14px]">Role</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="" >
            {/* row 1 */}

            {/* --------show data -------------- */}
           {
            allUsers?.map( singleUser  => <ManageUserRow
            key={singleUser._id} singleUser={singleUser} recalling={recalling} setRecalling={setRecalling}
            > 
            </ManageUserRow>)
           }
            
          </tbody>
         
        </table>
      </div>
        </div>
    );
};

export default ManageUsers;