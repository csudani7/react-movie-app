import styled from "styled-components";
import { theme } from "../../Theme/theme";

export const LayoutMainContainer = styled.div`
  display: flex;
`;

export const MainSection = styled.div<{
  isShowSidebar: boolean;
  isMobileDevice: boolean;
}>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: ${({ isShowSidebar, isMobileDevice }) =>
    isShowSidebar && !isMobileDevice
      ? "0px 50px 0px 325px"
      : "0px 20px 0px 110px"};
  transition-duration: 500ms;
  background: ${theme.colors.background};
`;
