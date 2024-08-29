import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../images/section1.png";
import image2 from "../images/card1.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import { Navigation, Autoplay, Pagination } from "swiper/modules";

const PaginationComponent = () => {
  return (
    <Swiper
      style={{ width: "100%", height: "100vh" }}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${image1})`,
            width: "100%",
            height: "100%",
            // objectFit: "contain",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              zIndex: 20000,
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "bold",
              paddingTop: "300px",
              color: "white",
            }}
          >
            넷마블문화재단 웹사이트입니다
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${image2})`,
            width: "100%",
            height: "100%",
            // objectFit: "contain",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "bold",
              paddingTop: "300px",
              color: "blue",
            }}
          >
            넷마블문화재단 웹사이트입니다
            <br />
            클론코딩
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default PaginationComponent;
