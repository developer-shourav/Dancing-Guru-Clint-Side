// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./TopSlider.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

import dancer1 from "../../../assets/images/homeSlider-img/dancer-1.png";
import dancer2 from "../../../assets/images/homeSlider-img/dancer-2.png";
import dancer3 from "../../../assets/images/homeSlider-img/dancer-3.png";
const TopSlider = () => {
  return (
    <div className="container mx-auto">
      
        {/* ----------------Website Top Banner Slider --------------------- */}
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={dancer1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={dancer2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={dancer3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopSlider;
