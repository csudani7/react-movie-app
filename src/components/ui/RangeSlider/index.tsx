import React from "react";
import styled from "styled-components";
import { Slider } from "@mui/material";
import { IRangeSliderProps } from "./RangeSlider";
import { theme } from "../../../Theme/theme";

const RangeSlider: React.FC<IRangeSliderProps.IProps> = ({
  value,
  width,
  bgColor,
  height,
}) => {
  return (
    <RangeSlideContainer>
      <Slider
        value={value}
        sx={{
          width: width,
          color: bgColor,
          height: height,
        }}
        min={0}
        max={10}
      />
    </RangeSlideContainer>
  );
};

export default RangeSlider;

export const RangeSlideContainer = styled.div`
  display: flex;

  .MuiSlider-thumb {
    display: none;
  }

  .MuiSlider-rail {
    background-color: ${theme.colors.black100};
  }
`;
