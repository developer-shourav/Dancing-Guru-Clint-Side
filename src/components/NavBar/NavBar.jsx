import HeaderCTA from "../HeaderCTA/HeaderCTA";
import {FiMenu} from 'react-icons/fi'
import WebLogo from '../../assets/images/logo/logo-lg.png'
import {  NavLink } from "react-router-dom";

const NavBar = () => {
  const menuItem = (
    <>
      <li>
        <NavLink to='/home'>Home</NavLink>
      </li>

      <li>
        <a>Item 2</a>
      </li>

      <li>
        <a>Item 3</a>
      </li>

      <li>
        <a>Item 4</a>
      </li>
    </>
  );



  return (
    <div>
      <HeaderCTA> </HeaderCTA>
      <div  className="bg-[#0d0d0d]">
      <div className="container mx-auto">
        <div className="navbar  text-stone-100   md:py-5">
          <div className="navbar-start w-10/12">
            <div className="dropdown">
              <label tabIndex={0} className="text-xl lg:hidden">
               <FiMenu> </FiMenu>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
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
            <ul className="menu menu-horizontal px-1">{menuItem}</ul>
          </div>
          <div className="navbar-end w-2/12">
            <a className="btn">Log In</a>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default NavBar;
