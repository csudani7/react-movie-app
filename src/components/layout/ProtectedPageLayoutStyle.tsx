//#Global Imports
import styled from "styled-components";

//#Local Imports
import { theme } from "../../Theme/theme";

export const LayoutMainContainer = styled.div`
  display: flex;
`;

export const MainSection = styled.div<{
  isShowSidebar: boolean;
  isMobileDevice: boolean;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ isShowSidebar, isMobileDevice }) =>
    isShowSidebar && !isMobileDevice ? "0px 50px 40px 325px" : "0px 20px 40px 90px"};
  transition-duration: 500ms;
  background: ${theme.colors.background};
`;
