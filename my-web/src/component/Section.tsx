import React from "react";
import styled from "styled-components";
import image1 from "../images/section1.png";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1360px;
  height: 350px;
  display: flex;
  justify-content: center;
  .text-wrap {
    width: 100%;
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
    }
  }
  img {
    position: absolute;
    right: 0px;
    top: 200px;
    width: 500px;
  }
`;

const Section = () => {
  return (
    <StyledContainer>
      <div className="text-wrap">
        <h2>Lorem ipsum dolor sit.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <img src={image1} alt="section-image" />
    </StyledContainer>
  );
};

export default Section;
