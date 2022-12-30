//Global Imports
import React from "react";
//End Global Imports

//Local Imports
import { IButton } from "./Button";
import { ButtonMainContainer } from "./ButtonStyle";
import { theme } from "../../../Theme/theme";
//End Local Imports

const Button: React.FC<IButton.IProps> = ({
  bgColor = theme.colors.aquaBlue,
  fontColor = theme.colors.black100,
  fontFamily = theme.typography.openSansFont,
  fontWeight = "700",
  fontSize = "15px",
  borderColor = "",
  borderWidth = "0px",
  borderRadius = "5px",
  children,
  onClickHandler,
  disabled = false,
}) => {
  return (
    <ButtonMainContainer
      bgColor={bgColor}
      fontColor={fontColor}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      borderColor={borderColor}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {children}
    </ButtonMainContainer>
  );
};

export default Button;
