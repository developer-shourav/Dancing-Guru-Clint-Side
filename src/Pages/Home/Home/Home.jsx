import useTitle from "../../../hooks/useTitle";
import PopularClasses from "../PopularClasses/PopularClasses";
import SendMail from "../PopularClasses/SendMail/SendMail";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import TopSlider from "../TopSlider/TopSlider";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  /* ---------Dynamic Title based on Page-------- */
  useTitle("Home");

  return (
    <div>
      {/* -----------Top Banner --------------------- */}
       <TopSlider> </TopSlider>

       {/* --------Popular Classes section-------------*/}
       <PopularClasses> </PopularClasses>

       {/* --------Popular Instructors section--------- */}
       <PopularInstructors> </PopularInstructors>

       {/* --------Send Massage section (Extra)--------- */}
        <SendMail> </SendMail>

      <ScrollRestoration />
    </div>
  );
};

export default Home;
