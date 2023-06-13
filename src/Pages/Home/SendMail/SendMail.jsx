import { IoIosSend } from "react-icons/io";
import MailSvg from "../../../assets/images/form-img/email.png";

const SendMail = () => {
  return (
    <div className="container mx-auto mt-10 px-5">
      <div>
        <h2 className="text-center  text-2xl md:text-3xl lg:text-4xl mb-5 dark:lg:mb-20  font-extrabold dark:text-[#E4444C]">
          {" "}
          Send Mail
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-10 items-center dark:items-start">
        <div className="md:w-full">
          <img className="w-full" src={MailSvg} alt="" />
        </div>

        <div className="md:w-10/12 dark:text-stone-200 dark:lg:mt-5">
          <form action="">
            <input
              className="w-full outline-none border-2 rounded ps-2 py-2  my-1 dark:bg-[#181818]  lg:my-2  border-[#E4444c] "
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              className="w-full outline-none border-2 rounded ps-2 py-2  my-1 lg:my-2 dark:bg-[#181818]  border-[#E4444c] "
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input
              className="w-full outline-none border-2 rounded ps-2 py-2  my-1 lg:my-2  dark:bg-[#181818] border-[#E4444c] "
              type="text"
              name="contact"
              placeholder="Contact Info"
              required
            />
            <textarea
              className="w-full outline-none border-2 rounded ps-2 py-2  my-1 lg:my-2 dark:bg-[#181818]  border-[#E4444c] "
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
            <button
              type="submit"
              className="btn bg-[#E4444c] hover:bg-[#89183E] text-stone-200 rounded border-0 shadow-black shadow-md"
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
