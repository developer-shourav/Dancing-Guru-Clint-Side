import useTitle from "../../../hooks/useTitle";
import TopSlider from "../TopSlider/TopSlider";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  /* ---------Dynamic Title based on Page-------- */
  useTitle("Home");
  return (
    <div>
       <TopSlider> </TopSlider>

      <ScrollRestoration />
    </div>
  );
};

export default Home;
