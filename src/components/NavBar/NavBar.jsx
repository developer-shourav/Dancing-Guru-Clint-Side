import HeaderCTA from "../HeaderCTA/HeaderCTA";
import {FiMenu, FiLogIn} from 'react-icons/fi'
import {AiOutlinePoweroff} from 'react-icons/ai'
import WebLogo from '../../assets/images/logo/logo-lg.png'
import {  NavLink } from "react-router-dom";

const NavBar = () => {
  const menuItem = (
    <>
      <li>
        <NavLink to='/home'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/contact'>Contact</NavLink>
      </li>
      <li>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/register'>Register</NavLink>
      </li>

    </>
  );



  return (
    <div>
      <HeaderCTA> </HeaderCTA>
      <div  className="bg-[#0d0d0d]">
      <div className="container mx-auto">
        <div className="navbar  text-stone-100   md:py-2">
          <div className="navbar-start w-8/12">
            <div className="dropdown">
              <label tabIndex={0} className="text-xl lg:hidden">
               <FiMenu> </FiMenu>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content logo-font-extra mt-3 p-2 shadow bg-black rounded-box w-52"
              >
                {menuItem}
              </ul>
            </div>

           <div className="flex items-center ps-4 md:ps-0">
            <span className="logo-font-extra  text-lg md:text-3xl  md:ms-0 ">Dancing Guru</span>
            <img src={WebLogo} className="w-10 md:w-20" alt="" />
           </div>

          </div>
          <div className="navbar-center  hidden lg:flex">
            <ul className="menu menu-horizontal px-1 logo-font-extra">{menuItem}</ul>
          </div>
          <div className="navbar-end  w-4/12">
             <span className="hidden md:inline"><a className="btn  rounded-full">Log In <FiLogIn className="text-xl"/></a></span>

             <span className=" md:hidden"><a className="btn btn-sm rounded-full">Log In <FiLogIn className="text-xl"/></a></span>

             <span className="hidden md:inline"><a className="btn border-0 bg-[#E4444C] hover:bg-[#a8060e] hover:text-stone-300 rounded-full">Log Out <AiOutlinePoweroff className="text-xl"/></a></span>

             <span className=" md:hidden"><a className="btn btn-sm rounded-full border-0 bg-[#E4444C] hover:bg-[#a8060e] hover:text-stone-300 ">Log Out <AiOutlinePoweroff className="text-xl"/></a></span>
            
            
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default NavBar;
