import React from "react";
import styled from "styled-components";
import { Slider } from "@mui/material";
import { IRangeSliderProps } from "./RangeSlider";

const RangeSlider: React.FC<IRangeSliderProps.IProps> = ({
  value,
  width,
  bgColor,
}) => {
  return (
    <RangeSlideContainer>
      <Slider
        defaultValue={value}
        sx={{
          width: width,
          color: bgColor,
        }}
        min={0}
        max={10}
      />
    </RangeSlideContainer>
  );
};

export default RangeSlider;

export const RangeSlideContainer = styled.div`
  .MuiSlider-thumb:is(:hover, .Mui-active) {
    display: none;
  }
`;
