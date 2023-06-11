import { NavLink } from "react-router-dom";
import WebLogo from "../../assets/images/logo/logo-lg.png";
import PaymentImg from "../../assets/images/payment-image/payment.png";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import { IoMdArrowDropright } from "react-icons/io";
import InstaImg1 from '../../assets/images/footer-img/insta1.png';
import InstaImg2 from '../../assets/images/footer-img/insta2.png';
import InstaImg3 from '../../assets/images/footer-img/insta3.png';
import InstaImg4 from '../../assets/images/footer-img/insta4.png';
import InstaImg5 from '../../assets/images/footer-img/insta5.png';
import InstaImg6 from '../../assets/images/footer-img/insta6.png';
const Footer = () => {
  return (
    <div className="pt-20 pb-5">
      <div className="py-16 text-[#7D7D7D] bg-[#0D0D0D]">
        <div className=" container mx-auto ">
          <div className=" w-11/12 md:w-12/12 lg:w-11/12 mx-auto grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-2 lg:gap-4">
            <div>
              <div className="flex items-center justify-start ps-4 md:ps-0">
                <span className="logo-font-extra  text-[29px]  text-white md:ms-0 ">
                  Dancing Guru
                </span>
                <img src={WebLogo} className="w-20" alt="" />
              </div>

              <p className="mb-5 ">
                We are <b> Dancing Guru</b>, providing the best dance training
                since 1999. We have the best of the best Instructors. Our goal
                is to make successful the people who are mad about dancing.
              </p>

              <div>
                <span className="font-bold text-white text-lg border-b-4 border-[#E4444C]">
                  Pay With
                </span>
                <img className="-ms-5" src={PaymentImg} alt="" />
              </div>
            </div>

            <div>
              <h2 className="text-stone-200 font-semibold logo-font-extra mt-5 text-xl">
                Contact Information
              </h2>
              <div className="flex items-center mt-2 mb-5">
              <span className="w-4/12 md:w-3/12 border-[3px] border-[#E4444C] rounded"></span>
                <span className="w-8/12 md:w-6/12 border-2 border-stone-600 rounded"></span>
              </div>

              <p className="flex items-center  gap-2">
                <HiLocationMarker className="text-xl text-[#E4444C]" />{" "}
                <span className="text-[16px]">New Delhi, Delhi, India</span>
              </p>

              <p className="flex items-center gap-2 my-3">
                <HiOutlineMail className="text-xl text-[#E4444C]" />{" "}
                <span>dancing.guru@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-sm ms-1 text-[#E4444C]" />{" "}
                <span>+501 654654</span>
              </p>

              <p className="flex items-center gap-2 my-3">
                <FaWhatsapp className="text-lg text-[#E4444C]" />{" "}
                <span>+601 6054654</span>
              </p>
            </div>

            <div>
              <h2 className="text-stone-200 font-semibold logo-font-extra mt-5 text-xl">
                Navigation
              </h2>
              <div className="flex items-center mt-2 mb-5">
                <span className="w-4/12 md:w-3/12 border-[3px] border-[#E4444C] rounded"></span>
                <span className="w-8/12 md:w-6/12 border-2 border-stone-600 rounded"></span>
              </div>

              <div className="list-none space-y-3">
                <li>
                    <NavLink className='flex items-center' to="/home"> <IoMdArrowDropright className="inline text-2xl text-[#E4444C]" /> Home</NavLink>
                </li>
                <li>
                    <NavLink className='flex items-center' to="/instructors"> <IoMdArrowDropright className="inline text-2xl text-[#E4444C]" /> Instructors</NavLink>
                </li>
                <li>
                    <NavLink className='flex items-center' to="/classes"> <IoMdArrowDropright className="inline text-2xl text-[#E4444C]" /> Classes</NavLink>
                </li>
                <li>
                    <NavLink className='flex items-center' to="/dashboard"> <IoMdArrowDropright className="inline text-2xl text-[#E4444C]" /> Dashboard</NavLink>
                </li>
                <li>
                    <NavLink className='flex items-center' to="/register"> <IoMdArrowDropright className="inline text-2xl text-[#E4444C]" /> Register</NavLink>
                </li>
                <li>
                    <NavLink className='flex items-center' to="/login"> <IoMdArrowDropright className="inline text-2xl text-[#E4444C]" /> Login</NavLink>
                </li>
               
              </div>
            </div>

            <div>
            <h2 className="text-stone-200 font-semibold logo-font-extra mt-5 text-xl">
                Instagram
              </h2>
              <div className="flex items-center mt-2 mb-5">
                <span className="w-4/12 md:w-3/12 border-[3px] border-[#E4444C] rounded"></span>
                <span className="w-8/12 md:w-9/12 border-2 border-stone-600 rounded"></span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="overflow-hidden rounded">
                  <img className="rounded  hover:scale-125 cursor-pointer" src={InstaImg1} alt="" />
                </div>
                <div className="overflow-hidden rounded">
                  <img className="rounded  hover:scale-125 cursor-pointer" src={InstaImg2} alt="" />
                </div>
                <div className="overflow-hidden rounded">
                  <img className="rounded  hover:scale-125 cursor-pointer" src={InstaImg3} alt="" />
                </div>
                <div className="overflow-hidden rounded">
                  <img className="rounded  hover:scale-125 cursor-pointer" src={InstaImg4} alt="" />
                </div>
                <div className="overflow-hidden rounded">
                  <img className="rounded  hover:scale-125 cursor-pointer" src={InstaImg5} alt="" />
                </div>
                <div className="overflow-hidden rounded">
                  <img className="rounded  hover:scale-125 cursor-pointer" src={InstaImg6} alt="" />
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <p>
        &copy; all Copyright <span className="text-[#E4444C] logo-font-extra"> Dancing Guru </span> reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
