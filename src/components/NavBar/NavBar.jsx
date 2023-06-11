import { FiMenu, FiLogIn } from "react-icons/fi";
import { AiOutlinePoweroff } from "react-icons/ai";
import WebLogo from "../../assets/images/logo/logo-lg.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const webTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("class", webTheme);
  }, [theme]);

  const themeToggler = (event) => {
    if (event.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const menuItem = (
    <>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/classes">Classes</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  return (


      <div className="bg-stone-100   dark:bg-[#0d0d0d] sticky top-0 left-0 z-50 shadow-xl">
        <div className="container  mx-auto">
          <div className="navbar font-bold dark:font-normal text-black    dark:text-stone-100   md:py-2">
            <div className="navbar-start w-8/12">
              <div className="dropdown">
                <label tabIndex={0} className="text-xl lg:hidden">
                  <FiMenu> </FiMenu>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content font-semibold mt-3 p-2 shadow-xl bg-gray-300  dark:bg-black rounded-box w-52"
                >
                  {menuItem}
                  <li className="  md:hidden">
                    <NavLink to='/login' className="btn bg-black dark:bg-white text-[#E4444C] btn-sm rounded-full">
                      Log In  <FiLogIn className="text-xl" />
                    </NavLink>
                  </li>

                  <li className=" md:hidden">
                <button  className="btn btn-sm rounded-full border-0 bg-[#E4444C] hover:bg-[#a8060e] hover:text-stone-300 ">
                  Log Out <AiOutlinePoweroff className="text-xl" />
                </button>
              </li>
                </ul>
              </div>

              <div className="flex items-center ps-4 md:ps-0">
                <span className="logo-font-extra text-black dark:text-white  text-lg md:text-3xl  md:ms-0 ">
                  Dancing Guru
                </span>
                <img src={WebLogo} className="w-10 md:w-16" alt="" />
              </div>
            </div>
            <div className="navbar-center  hidden lg:flex">
              <ul className="menu menu-horizontal font-semibold px-1 ">
                {menuItem}
              </ul>
            </div>
            <div className="navbar-end  w-4/12">
              <span className="hidden md:inline">
                <NavLink to='/login' className="btn bg-black dark:bg-white text-[#E4444C]  rounded-full">
                  Log In <FiLogIn className="text-xl" />
                </NavLink>
              </span>

              <span className="hidden md:inline">
                <button className="btn border-0 bg-[#E4444C] hover:bg-[#a8060e] hover:text-stone-300 rounded-full">
                  Log Out <AiOutlinePoweroff className="text-xl" />
                </button>
              </span>

             

              <span
                className="text-black bg-stone-300 dark:text-white dark:bg-gray-700 dark:bg-opacity-50 px-2 pt-2  rounded-full lg:tooltip lg:tooltip-bottom"
                data-tip={
                  theme === "light" ? "Set Dark Mode" : "Set Light Mode"
                }
              >
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    onChange={themeToggler}
                    checked={theme === "light" ? false : true}
                  />

                  {/* sun icon */}
                  <svg
                    className="swap-on fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-off fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default NavBar;
