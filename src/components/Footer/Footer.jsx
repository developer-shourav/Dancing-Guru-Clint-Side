import WebLogo from "../../assets/images/logo/logo-lg.png";
import PaymentImg from "../../assets/images/payment-image/payment.png";
import {FaPhoneAlt, FaWhatsapp} from 'react-icons/fa';
import {HiLocationMarker, HiOutlineMail} from 'react-icons/hi';
const Footer = () => {
  return (
    <div className="pt-20 pb-10">
      <div className="py-16 bg-[#0D0D0D]">
        <div className=" container mx-auto ">
          <div className=" w-11/12 mx-auto grid  grid-cols-1 md:grid-cols-4 gap-4">
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
                <span className="font-bold text-white text-lg border-b-4 border-red-600">
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
                <span className="w-3/12 border-[3px] border-red-600 rounded"></span>
                <span className="w-6/12 border-2 border-stone-600 rounded"></span>
              </div>

              <p className="flex items-center  gap-2">
                <HiLocationMarker className="text-xl text-[#e5202d]" />{" "}
                <span className="text-[16px]">New Delhi, Delhi, India</span>
              </p>

              <p className="flex items-center gap-2 my-3">
                <HiOutlineMail className="text-xl text-[#e5202d]" />{" "}
                <span>dancing.guru@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-sm ms-1 text-[#e5202d]" />{" "}
                <span>+501 654654</span>
              </p>

              <p className="flex items-center gap-2 my-3">
                <FaWhatsapp className="text-lg text-[#e5202d]" />{" "}
                <span>+601 6054654</span>
              </p>

             
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                libero.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                libero.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                libero.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                libero.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                libero.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                libero.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                libero.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                libero.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
          corporis.
        </p>
      </div>
    </div>
  );
};

export default Footer;
