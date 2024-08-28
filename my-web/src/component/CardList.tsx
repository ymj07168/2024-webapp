import React from "react";
import styled from "styled-components";
import CardItem from "./CardItem";

const ListContainer = styled.div`
  width: 100%;
  max-width: 1360px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardList = () => {
  return (
    <ListContainer>
      <CardItem />
      <CardItem />
      <CardItem />
    </ListContainer>
  );
};

export default CardList;
