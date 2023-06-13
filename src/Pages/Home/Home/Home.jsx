import useTitle from "../../../hooks/useTitle";
import PopularClasses from "../PopularClasses/PopularClasses";
import TopSlider from "../TopSlider/TopSlider";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  /* ---------Dynamic Title based on Page-------- */
  useTitle("Home");

  return (
    <div>
      {/* -----------Top Banner -------------- */}
       <TopSlider> </TopSlider>

       {/* --------Popular Classes section--------- */}
       <PopularClasses> </PopularClasses>

      <ScrollRestoration />
    </div>
  );
};

export default Home;
