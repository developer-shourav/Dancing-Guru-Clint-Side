import useTitle from "../../../hooks/useTitle";
import TopSlider from "../TopSlider/TopSlider";
import { ScrollRestoration } from "react-router-dom";
import dancer1 from "../../../assets/images/homeSlider-img/dancer-1.png";
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

      <ScrollRestoration />
    </div>
  );
};

export default Home;
