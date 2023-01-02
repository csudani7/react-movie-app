//#Global Imports
import styled from "styled-components";
import { Link } from "react-router-dom";

//#Local Imports
import { theme } from "../../../Theme/theme";

export const MainContainer = styled.div<{
  isshowsidebar: boolean;
  isHideOnMobile: boolean;
}>`
  display: ${({ isHideOnMobile, isshowsidebar }) =>
    isHideOnMobile || !isshowsidebar ? "hidden" : "flex"};
  flex-direction: column;
  justify-content: space-between;
  width: ${({ isshowsidebar }) => (isshowsidebar ? "275px" : "70px")};
  height: 100%;
  background: ${theme.colors.primary};
  position: fixed;
  left: 0;
  padding-bottom: 20px;
  transition-duration: 500ms;
  z-index: 1;

  @media (min-width: 640px) {
    display: ${({ isHideOnMobile, isshowsidebar }) =>
      isHideOnMobile || isshowsidebar ? "flex" : "hidden"};
  }
`;

export const HamBerger = styled.div<{
  isshowsidebar: boolean;
}>`
  width: 100%;
  display: flex;
  justify-content: ${({ isshowsidebar }) => (isshowsidebar ? "flex-end" : "center")};
  margin: ${({ isshowsidebar }) => (isshowsidebar ? "20px 20px 0 0" : "20px 0px")};
`;

export const HamBergerSubDiv = styled.div<{
  isshowsidebar: boolean;
}>`
  width: fit-content;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-right: ${({ isshowsidebar }) => isshowsidebar && "20px"};

  div {
    width: 26px;
    height: 2px;
    margin: 4px 0px;
    background: ${theme.colors.white100};
  }
`;

export const ProfileImageContainer = styled.div<{
  isshowsidebar: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;
  margin-top: ${({ isshowsidebar }) => !isshowsidebar && "8px"};
`;

export const ProfileImage = styled.div<{
  isshowsidebar: boolean;
}>`
  width: ${({ isshowsidebar }) => (isshowsidebar ? "91px" : "51px")};
  height: ${({ isshowsidebar }) => (isshowsidebar ? "91px" : "51px")};
  border-radius: 100px;
  overflow: hidden;
  cursor: pointer;

  svg {
    width: ${({ isshowsidebar }) => (isshowsidebar ? "91px" : "51px")};
    height: ${({ isshowsidebar }) => (isshowsidebar ? "91px" : "51px")};
  }
`;

export const UserName = styled.div<{
  isshowsidebar: boolean;
}>`
  font-weight: 600;
  font-size: ${({ isshowsidebar }) => (isshowsidebar ? "20px" : "12px")};
  font-family: ${theme.typography.openSansFont};
  color: ${theme.colors.gray100};
  text-align: center;
`;

export const SideBarLineBreaker = styled.div<{
  padding: string;
}>`
  border: 1px solid ${theme.colors.secondary};
  margin: ${({ padding }) => padding};
`;

export const Menu = styled.div<{
  isshowsidebar: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 17px;
`;

export const NavLink = styled(Link)<{
  isshowsidebar: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: ${({ isshowsidebar }) =>
    isshowsidebar ? "11px 11px 11px 50px" : "11px 11px 11px 26px"};
  text-decoration: none;

  &:hover .mobileMenuName {
    opacity: 1;
    padding: 4px 8px;
    left: 64px;
    transition-duration: 300ms;
  }
`;

export const MenuIcon = styled.div<{
  isshowsidebar: boolean;
}>`
  display: flex;
  align-items: center;
  transition-duration: 300ms;
`;

export const MenuName = styled.div<{
  isActiveTab: boolean;
  isshowsidebar: boolean;
  index: number;
}>`
  color: ${({ isActiveTab }) => (isActiveTab ? theme.colors.aquaBlue : theme.colors.gray100)};
  opacity: ${({ isshowsidebar }) => !isshowsidebar && "0"};
  transform: ${({ isshowsidebar }) => !isshowsidebar && "translateX(112px)"};
  overflow: ${({ isshowsidebar }) => !isshowsidebar && "hidden"};
  transition-delay:  ${({ index }) => index + 3 + "00ms"}};
`;

export const MobileMenuName = styled.div<{
  isshowsidebar: boolean;
}>`
  display: ${({ isshowsidebar }) => (isshowsidebar ? "none" : "block")};
  position: absolute;
  left: 160px;
  white-space: pre;
  color: ${theme.colors.gray100};
  border-radius: 6px;
  overflow: hidden;
  padding: 0px;
  opacity: 0;
`;

export const ActiveBorder = styled.div<{
  isActiveTab: boolean;
}>`
  width: 3px;
  height: 33px;
  background-color: ${({ isActiveTab }) => isActiveTab && theme.colors.aquaBlue};
  position: absolute;
  right: 0px;
`;
