//#Global Imports
import styled, { keyframes } from "styled-components";

//#Local Imports
import { theme } from "../../../Theme/theme";

export const verticalSlider = keyframes`
0% {
  transform: scaleY(0);
}
100% {
  transform: scaleY(1);
}
`;

export const opacityAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const CardDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;
  background-color: ${theme.colors.secondary};
  border-radius: 11px;
  overflow: hidden;
  width: 100%;
  animation: ${verticalSlider} 500ms ease-in-out;
  animation-fill-mode: both;

  @media (min-width: 640px) {
    flex-direction: row;
    height: 389px;
  }
`;

export const ImageContainer = styled.div<{
  width: string;
  height: string;
}>`
  width: 100%;
  animation: ${opacityAnimation} 500ms ease-in-out;
  animation-fill-mode: both;
  animation-delay: 500ms;

  img {
    width: 100%;
    height: ${({ height }) => height};
  }

  @media (min-width: 640px) {
    width: auto;
    img {
      width: ${({ width }) => width};
    }
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 34px 15px 25px 15px;
  animation: ${opacityAnimation} 500ms ease-in-out;
  animation-fill-mode: both;
  animation-delay: 500ms;
  width: 100%;

  @media (min-width: 640px) {
    padding: 34px 42px 25px 42px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  font-weight: 700;
  font-size: 30px;
  font-family: ${theme.typography.openSansFont};
  color: ${theme.colors.gray100};
`;

export const RatingsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

export const Rating = styled.div`
  font-weight: 600;
  font-size: 16px;
  font-family: ${theme.typography.openSansFont};
  color: ${theme.colors.gray100};
`;

export const OtherDetailsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 35px;
`;

export const OtherDetailsSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
  font-weight: 600;
  font-size: 16px;
  font-family: ${theme.typography.openSansFont};
  color: ${theme.colors.gray100};
`;

export const MovieDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  font-family: ${theme.typography.openSansFont};
  color: ${theme.colors.white100};
  text-align: start;
  padding: 21px 0px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  @media (min-width: 640px) {
    gap: 16px;
  }
`;
