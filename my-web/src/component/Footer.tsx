import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  background-color: #232;
  color: white;
  padding: 80px 40px;
  footer {
    width: 100%;
    max-width: 1360px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <footer>
        <div>로고재단</div>
        <div>Lorem ipsum dolor sit amet consectetur </div>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
