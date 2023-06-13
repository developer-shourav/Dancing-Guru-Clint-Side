import { IoIosSend } from "react-icons/io";
import MailSvg from "../../../../assets/images/form-img/email.png";
import { MdEmail } from "react-icons/md";

const SendMail = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center my-10">
        {" "}
        <MdEmail className="text-red-600 text-5xl md:text-4xl lg:text-6xl inline" />{" "}
        Send Mail
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
        <div className="md:w-full">
          <img className="w-full" src={MailSvg} alt="" />
        </div>

        <div className="md:w-10/12">
          <form action="">
            <input
              className="w-full outline-none border-2 rounded ps-2 py-2 bg-red-50 my-1  lg:my-2  border-red-500 "
              type="text"
              name="name"
              placeholder="Your Name*"
              required
            />
            <input
              className="w-full outline-none border-2 rounded ps-2 py-2 bg-red-50 my-1 lg:my-2  border-red-500 "
              type="email"
              name="email"
              placeholder="Your Email*"
              required
            />
            <input
              className="w-full outline-none border-2 rounded ps-2 py-2 bg-red-50 my-1 lg:my-2  border-red-500 "
              type="text"
              name="contact"
              placeholder="Contact Info*"
              required
            />
            <textarea
              className="w-full outline-none border-2 rounded ps-2 py-2 bg-red-50 my-1 lg:my-2  border-red-500 "
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Your Message*"
              required
            ></textarea>
            <button
              type="submit"
              style={{ background: "red" }}
              className="btn rounded border-0 shadow-red-500 shadow-md"
            >
              <IoIosSend className="text-xl" />{" "}
              <input type="submit" value="Send Message" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMail;
