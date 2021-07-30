import React from "react";
import styled from "styled-components";
import logo from "../Images/logoT.png";
import { HorizontalSplit } from "@material-ui/icons";
import ButtonComponent from "../LandingComponents/ButtonComponent";
const Navbar = ({ toggle }) => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <NavbarLeft>
          <img src={logo} alt="Company Logo" />
          <MobileIcon onClick={toggle}>
            <HorizontalSplit />
          </MobileIcon>
          <NavMenu>
            <li>Integration</li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>About Us</li>
          </NavMenu>
        </NavbarLeft>
        <NavbarRight>
          <ButtonComponent text="Get early access" />
        </NavbarRight>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  height: 10vh;
  width: 100%;
  background-color: #e7e7e7;
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 20px;
    cursor: pointer;
    color: #000;
  }
`;

const NavMenu = styled.ul`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  margin-left: 40px;
  li {
    border-bottom: 2px solid transparent;
    margin-left: 30px;
    padding: 2px 5px;
    transition: all ease-in 0.5s;
    cursor: pointer;
    &:hover {
      border-bottom: 2px solid #5454d4;
      color: #5454d4;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavbarLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: calc(10% - 50px);
  img {
    width: 40px;
    display: block;
  }

  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;
const NavbarRight = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export default Navbar;
