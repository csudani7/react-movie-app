//#Global Imports
import styled from "styled-components";

//#Local Imports
import { theme } from "../../../Theme/theme";

export const MainSearchbar = styled.div<{
  isSearchBarOpen: boolean;
  isMobileDevice: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ isSearchBarOpen }) =>
    isSearchBarOpen ? theme.colors.primary100 : "transparent"};
  width: ${({ isSearchBarOpen, isMobileDevice }) =>
    isSearchBarOpen && !isMobileDevice
      ? "567px"
      : isSearchBarOpen && isMobileDevice
      ? "200px"
      : "0px"};
  cursor: pointer;
  padding: ${({ isMobileDevice }) => (isMobileDevice ? "0px 10px" : "0px 20px")};
  height: 44px;
  border-radius: 8px;
  transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (min-width: 640px) {
    height: 55px;
  }
`;

export const Input = styled.input<{
  isSearchBarOpen: boolean;
}>`
  font-size: 11px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${({ isSearchBarOpen }) => (isSearchBarOpen ? "1rem" : "0rem")};
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

  @media (min-width: 640px) {
    font-size: 21px;
  }
`;

export const SearchIconContainer = styled.div<{
  isSearchBarOpen: boolean;
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
