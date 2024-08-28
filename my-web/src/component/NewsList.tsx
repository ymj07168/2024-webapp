import React from "react";
import styled from "styled-components";
import NewsCard from "./NewsCard";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

const ListContainer = styled.div`
  max-width: 1360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  .news-list {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    overflow-x: scroll;
  }
  .mySwiper {
    width: 100%;
  }
`;
const NewsList = () => {
  return (
    <ListContainer>
      <h1>재단소식</h1>
      <Swiper
        className="mySwiper"
        slidesPerView={3} // 한 번에 3개의 슬라이드를 표시
        scrollbar={{
          hide: true,
        }}
      >
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide>
          <NewsCard />
        </SwiperSlide>
      </Swiper>
    </ListContainer>
  );
};

export default NewsList;
