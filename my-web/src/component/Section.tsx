import React from "react";
import styled from "styled-components";
import image1 from "../images/section1.png";

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1360px;
  height: 500px;
  .text-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    height: 300px;
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    position: relative;
    background-color: orange;
    > p {
      text-align: left;
      font-size: 20px;
    }
  }
  img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 600px;
  }
`;

const Section = () => {
  return (
    <StyledContainer>
      <div className="text-wrap">
        <h1>Lorem ipsum dolor sit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <img src={image1} alt="section-image" />
    </StyledContainer>
  );
};

export default Section;
