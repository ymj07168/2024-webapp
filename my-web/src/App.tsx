import React from "react";
import Header from "./component/Header";
import Section from "./component/Section";
import CardList from "./component/CardList";
import styled from "styled-components";
import Footer from "./component/Footer";
import NewsList from "./component/NewsList";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  align-items: center;
`;

function App() {
  return (
    <>
      <Header />
      <Container>
        <Section />
        <CardList />
        <NewsList />
      </Container>
      <Footer />
    </>
  );
}

export default App;
