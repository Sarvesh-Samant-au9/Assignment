import React from "react";
import "./ButtonComponent.css";
import PlayIcon from "./PlayIcon";
const ButtonComponent = ({ text, iconState }) => {
  return (
    <button className={iconState ? "button__noHover" : "button__hover"}>
      {iconState ? (
        <>
          <PlayIcon width="20px" />
          {text}
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default ButtonComponent;
