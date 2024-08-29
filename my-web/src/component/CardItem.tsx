import React from "react";
import styled from "styled-components";
import cardImg1 from "../images/card1.png";

const ItemContainer = styled.div`
  width: 100%;
  max-width: 380px;
  height; 580px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  img{
    width: 100%;
    object-fit: cover;
    transition: 0.3s;
  };
  img:hover {
    transform: translateY(-20px);
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.3);
  };
border-radius: 5px;
background-color: white;
`;

const CardItem = () => {
  return (
    <ItemContainer>
      <img src={cardImg1} alt="card-image" />
      <h3>Lorem, ipsum dolor.</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        fugit!
      </p>
    </ItemContainer>
  );
};

export default CardItem;
