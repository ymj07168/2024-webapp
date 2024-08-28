import React, { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div<{ menuTab: Boolean }>`
  position: fixed;
  z-index: 1500;
  width: 100%;
  height: 80px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  header {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 40px;
    transition: 0.3s;
    background: ${(props) => (props.menuTab ? "white" : "#232")};
  }
  // header:hover {
  //   background: white;
  //   .logo {
  //     color: black;
  //   }
  //   .menu {
  //     color: black;
  //   }
  // }
  .menu {
    color: ${(props) => (props.menuTab ? "black" : "white")};
  }
  .logo {
    font-weight: bold;
    color: ${(props) => (props.menuTab ? "black" : "white")};
  }
`;

const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: row;
  min-width: 300px;
  justify-content: space-between;
  .menu {
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  .menu:hover {
    border-bottom: 3px solid orange;
  }
`;

const StyledMenuTab = styled.div`
  position: absolute;
  width: 100%;
  height: 150px;
  background-color: white;
  border-top: 0.3px solid #eee;
  @keyframes fadeInUp {
    0% {
      height: 0;
    }
    to {
      height: 150px;
    }
  }
  animation: fadeInUp 0.5s;
  padding: 20px 40px;
  .submenu-wrapper {
    min-width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .submenu-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  display: flex;
  justify-content: flex-end;
`;

const Header = () => {
  const [menuTab, setMenuTab] = useState(false);

  console.log(menuTab);

  return (
    <StyledContainer menuTab={menuTab}>
      <header>
        <div className="logo">로고</div>
        <StyledNav
          onMouseOver={() => setMenuTab(true)}
          onMouseLeave={() => setMenuTab(false)}
        >
          <div className="menu">menu1</div>
          <div className="menu">menu2</div>
          <div className="menu">menu3</div>
        </StyledNav>
      </header>
      {menuTab && (
        <StyledMenuTab
          onMouseOver={() => setMenuTab(true)}
          onMouseLeave={() => setMenuTab(false)}
        >
          <div className="submenu-wrapper">
            <div className="submenu-list">
              <div className="submenu-item">submenu1</div>
              <div className="submenu-item">submenu1</div>
              <div className="submenu-item">submenu1</div>
            </div>
            <div className="submenu-list">
              <div className="submenu-item">submenu1</div>
              <div className="submenu-item">submenu1</div>
              <div className="submenu-item">submenu1</div>
            </div>
            <div className="submenu-list">
              <div className="submenu-item">submenu1</div>
              <div className="submenu-item">submenu1</div>
              <div className="submenu-item">submenu1</div>
            </div>
          </div>
        </StyledMenuTab>
      )}
    </StyledContainer>
  );
};

export default Header;
