import React from "react";
import styled from "styled-components";
import ButtonComponent from "../LandingComponents/ButtonComponent";
import "./Landing.css";
import imageSVGtype from "../Images/icon.png";
const Landing = () => {
  return (
    <LandingContainer>
      <LandingLeft>
        <h2>
          Don't Worry.
          <br />
          We are here for
          <br />
          Every Solution.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          corporis delectus vitae incidunt, repudiandae ipsam, magnam illo magni
        </p>
        <ButtonGroup>
          <ButtonComponent text="Get Started" />
          <ButtonComponent iconState={true} text="Watch Video" />
        </ButtonGroup>
        <IconGroup>
          <span className="span__icon">Integrations</span>
          <span className="span__icon">Amazon</span>
          <span className="span__icon">Google</span>
          <span className="span__icon">Northern</span>
          <span className="span__icon">Skrill</span>
        </IconGroup>
      </LandingLeft>
      <LandingRight>
        <img src={imageSVGtype} alt="svg" />
      </LandingRight>
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  /* Sizing Width and Height */
  padding: 20px;

  min-height: 70vh;
  width: 90%;
  margin: 20px auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
const LandingLeft = styled.div`
  flex: 40%;
  margin-left: 30px;
  height: 100%;
  h2 {
    font-size: 58px;
  }
  p {
    color: #8b8b8b;
    padding: 0 5px 0 5px;
  }

  @media screen and (max-width: 1200px) {
    h2 {
      font-size: 48px;
    }
    p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 1000px) {
    h2 {
      font-size: 40px;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 500px) {
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 10px;
    }
  }
`;

const ButtonGroup = styled.div`
  margin-top: 25px;
  display: flex;
  width: 70%;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    width: 90%;
  }
  @media screen and (max-width: 1000px) {
    width: 90%;
  }
  @media screen and (max-width: 768px) {
    width: 60%;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    /* margin: auto; */
    align-items: center;
    margin-top: 25px;
  }

  @media screen and (max-width: 350px) {
    width: 90%;
  }
`;

const IconGroup = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  padding: 0px 15px;
  margin-bottom: 20px;

  @media screen and (max-width: 1000px) {
    padding: 0;
    font-size: 10px;
  }

  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: start;
    span {
      padding: 5px;
    }
  }
`;

const LandingRight = styled.div`
  flex: 50%;

  img {
    width: 90%;
    height: 100%;
    display: block;
    margin: auto;
  }
  @media screen and (max-width: 1000px) {
    margin-bottom: 20px;
    img {
      width: 100%;
      height: 120%;
    }
  }
`;
export default Landing;
