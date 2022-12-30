import React from "react";
declare namespace IButton {
  export interface IProps {
    children: React.ReactNode;
    bgColor?: string;
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string;
    fontColor?: string;
    borderColor?: string;
    borderWidth?: string;
    borderRadius?: string;
    onClickHandler?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    disabled?: boolean;
  }
}

export { IButton };
