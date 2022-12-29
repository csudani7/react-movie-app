import styled from "styled-components";
import { theme } from "../../../Theme/theme";

export const MainSearchbar = styled.div<{
  barOpened: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ barOpened }) =>
    barOpened ? theme.colors.primary100 : "transparent"};
  width: ${({ barOpened }) => (barOpened ? "567px" : "0px")};
  cursor: pointer;
  padding: 0px 20px;
  height: 55px;
  border-radius: 8px;
  transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const Input = styled.input<{
  barOpened: boolean;
}>`
  font-size: 21px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${({ barOpened }) => (barOpened ? "1rem" : "0rem")};
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.gray100};
  }
`;

export const SearchIconContainer = styled.div<{
  barOpened: boolean;
}>`
  line-height: 1;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;

export const CloseContainer = styled.div<{
  searcedhValue: string;
}>`
  cursor: pointer;
  display: ${({ searcedhValue }) => (searcedhValue === "" ? "none" : "flex")};
`;
