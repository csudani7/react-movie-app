//#Global Imports
import styled from "styled-components";

//#Local Imports
import { theme } from "../../../Theme/theme";

export const BaseCard = styled.div<{
  width: string;
  bgColor: string;
  height: string;
}>`
  display: flex;
  flex-direction: column;
  background: ${({ bgColor }) => `${bgColor} !important`};
  width: 100%;
  max-height: ${({ height }) => height};
  border-radius: 11px;
  padding: 10px 10px 15px 10px;
  justify-content: space-between;

  @media (min-width: 640px) {
    width: ${({ width }) => width};
  }
`;

export const ImgCard = styled.div`
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  cursor: pointer;

  img {
    object-fit: fill;
  }
`;

export const Title = styled.div<{
  fontColor: string;
}>`
  display: block;
  font-family: ${theme.typography.openSansFont};
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ fontColor }) => fontColor};
  padding: 10px 0px 15px 0px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: start;
  cursor: pointer;
  gap: 16px;
`;
