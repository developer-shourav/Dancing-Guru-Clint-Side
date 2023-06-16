import { NavLink, Outlet } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaUsersCog
} from "react-icons/fa";
import {BsFillAwardFill} from 'react-icons/bs'
import { SiGoogleclassroom } from "react-icons/si";
import { IoMdDoneAll } from "react-icons/Io";
import {MdLibraryAdd, MdOutlineBallot} from "react-icons/md";
import {AiOutlineFileProtect} from 'react-icons/ai';



import useTitle from "../hooks/useTitle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Dashboard = () => {
 
    /* ---------Dynamic Title based on Page-------- */
    useTitle('Dashboard')
    /* ---------Taking user form DB and firebase----- */
    const {reloader, user} = useContext(AuthContext);

    /* -------------Define The user Role----------- */
    const [userRole, setUserRole] = useState(null);
    const requestEmail = user?.email || 'abc@gmail.com';

    useEffect(() => {
        fetch(`https://dancing-guru-server.vercel.app/users/${requestEmail}`)
        .then( res => res.json())
        .then( data => {
            if(user?.email === data.userEmail){
                setUserRole(data?.role)
            }
        })
    }, [reloader])

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet> </Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open Dashboard
        </label>
      </div>
      <div className="drawer-side bg-blue-200">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu font-bold p-4  h-full  ">

{/* --------------User and Admin Based Dynamic Dashboard----------- */}
            {
                userRole === 'admin' && <>
                <li>
                  <NavLink  to="/dashboard/home">
                    <FaHome className="text-xl" /> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageCls">
                    <AiOutlineFileProtect className="text-xl" /> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUsers">
                    <FaUsersCog className="text-xl" /> Manage Users
                  </NavLink>
                </li>
              </>
            }

            {
                userRole === 'instructor' && <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome className="text-xl" /> Instructor Home
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to="/dashboard/addCls">
                    <MdLibraryAdd className="text-xl" /> Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myClasses">
                    <MdOutlineBallot className="text-xl" /> My Classes
                  </NavLink>
                </li> 
              </>
            }

           {
             userRole === 'user' &&  <>
             <li className="">
               <NavLink to="/dashboard/home">
                 <FaHome className="text-xl" /> Student Home
               </NavLink>
             </li>
             <li>
               <NavLink to="/dashboard/userClass">
                 <IoMdDoneAll className="text-xl" /> My Selected Classes
               </NavLink>
             </li>
             <li>
               <NavLink to="/dashboard/enrolledCls">
                 <BsFillAwardFill className="text-xl" /> My Enrolled Classes
               </NavLink>
             </li>
            
           </>
           }




{/* ------------Divider And Common Routes for both Users and Admin------------ */}
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome className="text-xl" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructors">
              <FaUsers className="text-xl" /> All Instructors
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              <SiGoogleclassroom className="text-xl" /> All Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
