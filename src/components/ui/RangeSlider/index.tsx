//#Global Imports
import React from "react";
import styled from "styled-components";
import { Slider } from "@mui/material";

//#Local Imports
import { IRangeSliderProps } from "./RangeSlider";
import { theme } from "../../../Theme/theme";

const RangeSlider: React.FC<IRangeSliderProps.IProps> = ({ value, width, bgColor, height }) => {
  const [sliderValue, setSliderValue] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setSliderValue(value);
    }, 500);
  }, []);

  return (
    <RangeSlideContainer>
      <Slider
        value={sliderValue}
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

  .MuiSlider-track {
    transition: width 500ms ease-in;
  }
`;
