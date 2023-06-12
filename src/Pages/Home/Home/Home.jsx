import useTitle from "../../../hooks/useTitle";
import TopSlider from "../TopSlider/TopSlider";
import { ScrollRestoration } from "react-router-dom";
import dancer1 from "../../../assets/images/homeSlider-img/dancer-1.png";
import dancer2 from "../../../assets/images/homeSlider-img/dancer-2.png";
import dancer3 from "../../../assets/images/homeSlider-img/dancer-3.png";
import { FiArrowRight } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Home = () => {
  /* ---------Dynamic Title based on Page-------- */
  useTitle("Home");
  return (
    <div>
      {/*  <TopSlider> </TopSlider> */}

      <div className=" pb-5 md:py-10 bg-[#89183E] dark:bg-[#17161D]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start px-5 ">
            <div className=" md:w-7/12 ">
              <img src={dancer1} className=" md:w-10/12 mx-auto mt-5 md:mt-0" alt="" />
            </div>
            <div className="md:w-5/12 mt-5 md:mt-20">
              <p className="text-[#C0BFC4] font-[500] mb-2">
                Enjoy each step along the way.
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#17161D] dark:text-[#C0BFC4] ">
                Learn to dance{" "}
              </h1>
              <h1 className=" text-3xl md:text-4xl lg:text-5xl  font-bold text-[#17161D]  dark:text-[#C0BFC4] mt-2 md:mt-5 ">
                with style
              </h1>

              <div className=" mt-3 md:mt-10 flex items-center gap-5">
                {" "}
                <p
                  style={{ letterSpacing: "2px" }}
                  className="uppercase font-bold text-[#17161D] dark:text-[#8a8a8a] "
                >
                  Learn More
                </p>{" "}
                <span className="p-2 border-[#17161D] dark:border-[#8a8a8a] rounded-full border-2">
                  {" "}
                  <FiArrowRight className="text-[#17161D] dark:text-[#8a8a8a]" />{" "}
                </span>
              </div>

              <div className="mt-8 md:mt-20 flex items-center  gap-x-5">
                <p
                  style={{ letterSpacing: "2px" }}
                  className="uppercase text-[14px] text-[#fff] "
                >
                  FOLLOW US
                </p>{" "}
                <hr className="border-1 md:w-1/12" />
                <div className="flex">
                  <span className="p-2  rounded-full">
                    {" "}
                    <FaFacebook className="text-[#17161D] dark:text-[#8a8a8a] text-xl" />{" "}
                  </span>{" "}
                  <span className="p-2 b rounded-full ">
                    {" "}
                    <FaInstagram className="text-[#17161D] dark:text-[#8a8a8a] text-xl" />{" "}
                  </span>
                  <span className="p-2  rounded-full">
                    {" "}
                    <FaTwitter className="text-[#17161D] dark:text-[#8a8a8a] text-xl" />{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* -----------Second Banner------------ */}
      <div className=" pb-5 md:py-10 bg-[#9171558c] dark:bg-[#917155] ">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-start px-5 ">
            
            <div className="md:w-7/12 mt-5 md:mt-20">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#17161D] ">
                Fulfil Your Dream with us
              </h1>
              <p className="text-gray-900 dark:text-[#dfdee0] w-full md:w-8/12 lg:w-7/12 font-[500] md:my-8">
              Start your first journey with us. We are always ready to welcome you. We have the ability to make you great. We have the best dancing Instructors/ Guru all over the world. We can Learn all kinds of forms of dance here.
              </p>

              <div className=" mt-3 md:mt-10 flex items-center gap-5">
                {" "}
                <p
                  style={{ letterSpacing: "2px" }}
                  className="uppercase font-bold text-[#17161D] dark:text-[#dfdee0] "
                >
                  Learn More
                </p>{" "}
                <span className="p-2 border-[#17161D] dark:border-[#dfdee0] rounded-full border-2">
                  {" "}
                  <FiArrowRight className="text-[#17161D] dark:text-[#dfdee0]" />{" "}
                </span>
              </div>

              
            </div>

            <div className=" md:w-5/12 ">
              <img src={dancer2} className=" w-10/12 mx-auto mt-5 md:mt-0" alt="" />
            </div>

          </div>
        </div>
      </div>
      {/* -----------Third Banner------------ */}
      <div className=" pb-5 md:py-10 dark:bg-[#89183E] bg-[#e0535a] ">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start px-5 ">

          <div className=" md:w-5/12 ">
              <img src={dancer3} className=" w-10/12 mx-auto mt-5 md:mt-0" alt="" />
            </div>


            <div className="md:w-7/12 mt-5 md:mt-20">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#17161D] ">
                Start Your Journey
              </h1>
              <p className="text-gray-900 dark:text-[#dfdee0] w-full md:w-8/12 lg:w-7/12 font-[500] md:my-8">
              Start your first journey with us. We are always ready to welcome you. We have the ability to make you great. We have the best dancing Instructors/ Guru all over the world. We can Learn all kinds of forms of dance here.
              </p>

              <div className=" mt-3 md:mt-10 flex items-center gap-5">
                {" "}
                <p
                  style={{ letterSpacing: "2px" }}
                  className="uppercase font-bold text-[#17161D] dark:text-[#dfdee0] "
                >
                  Learn More
                </p>{" "}
                <span className="p-2 border-[#17161D] dark:border-[#dfdee0] rounded-full border-2">
                  {" "}
                  <FiArrowRight className="text-[#17161D] dark:text-[#dfdee0]" />{" "}
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>

      <ScrollRestoration />
    </div>
  );
};

export default Home;
