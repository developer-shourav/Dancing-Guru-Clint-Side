import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import { GrMenu } from "react-icons/gr";
import { MdLocalDining } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
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
      <div className="drawer-side bg-[#d4d4d4]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full  ">

{/* --------------User and Admin Based Dynamic Dashboard----------- */}
            {
                userRole === 'admin' && <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome /> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageCls">
                    <FaUtensils /> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUsers">
                    <TfiMenuAlt /> Manage Users
                  </NavLink>
                </li>
              </>
            }

            {
                userRole === 'instructor' && <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome /> Instructor Home
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to="/dashboard/addCls">
                    <FaHome /> Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myClasses">
                    <FaCalendarAlt /> My Classes
                  </NavLink>
                </li> 
              </>
            }

           {
             userRole === 'user' &&  <>
             <li>
               <NavLink to="/dashboard/home">
                 <FaHome /> Student Home
               </NavLink>
             </li>
             <li>
               <NavLink to="/dashboard/userClass">
                 <FaCalendarAlt /> My Selected Classes
               </NavLink>
             </li>
             <li>
               <NavLink to="/dashboard/enrolledCls">
                 <FaWallet /> My Enrolled Classes
               </NavLink>
             </li>
            
           </>
           }




{/* ------------Divider And Common Routes for both Users and Admin------------ */}
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructors">
              <GrMenu /> All Instructors
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              <MdLocalDining /> All Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
