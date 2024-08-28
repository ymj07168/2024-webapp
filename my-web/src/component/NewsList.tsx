import React from "react";
import styled from "styled-components";
import NewsCard from "./NewsCard";

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
`;
const NewsList = () => {
  return (
    <ListContainer>
      <h1>재단소식</h1>
      <div className="news-list">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </ListContainer>
  );
};

export default NewsList;
