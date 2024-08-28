import React from "react";
import section1 from "../images/section1.png";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 380px;
  height: 500px;
  border: 1px;
  transition: 0.3s;
  &:hover {
    transform: translateY(-20px);
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.3);
  }
  img {
    margin-bottom: 10px;
  }
  .content-wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
const NewsCard = () => {
  return (
    <CardContainer>
      <img src={section1} alt="section1" />
      <div className="content-wrap">
        <div className="content">
          <h2>제21회 넷마블게임콘서트 개최 안내</h2>
          <h5>넷마블게임콘서트 참가 신청하기</h5>
        </div>
        <p>공지사항 2024.06.10</p>
      </div>
    </CardContainer>
  );
};

export default NewsCard;
