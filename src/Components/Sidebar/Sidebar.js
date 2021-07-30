import React from "react";
import styled from "styled-components";
import { Close } from "@material-ui/icons";
import ButtonComponent from "../LandingComponents/ButtonComponent";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <Close />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <li>Integration</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li>About Us</li>
        </SidebarMenu>
        <SideBtnWrap>
          <ButtonComponent text={"Get early access"} />
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  position: fixed;
  z-index: 1000;
  height: 100%;
  width: 100%;
  background-color: #5e5e5e;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
const Icon = styled(Close)`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
`;
const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    color: #fff;

    &:hover {
      color: #aeaefc;
      transition: ease-in-out 0.2s;
    }
  }
`;
const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export default Sidebar;
