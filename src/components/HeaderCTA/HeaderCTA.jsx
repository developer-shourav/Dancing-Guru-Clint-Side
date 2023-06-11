import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
const HeaderCTA = () => {
  return (
    <div className="bg-stone-200 px-1 dark:bg-[#1B1B1B]">
      <div className=" mx-auto container hidden md:block">
        <div className="flex justify-between py-1">
          <div className="flex items-center text-xl gap-2">
            <FaWhatsapp />
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <p className="flex items-center ms-5 gap-2">
              <HiLocationMarker className="text-xl text-[#e5202d]" />{" "}
              <span className="text-[16px]">New Delhi, Delhi, India</span>
            </p>
          </div>

          <div className="flex gap-4 ">
            <p className="flex items-center gap-2">
              <HiOutlineMail className="text-xl text-[#e5202d]" />{" "}
              <span>dancing.guru@gmail.com</span>
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-sm text-[#e5202d]" />{" "}
              <span>+501 654654</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCTA;
