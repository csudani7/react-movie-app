import React, { createContext } from "react";
import Sidebar from "./Sidebar";
import IProtectedPageLayout from "./ProtectedPageLayout";
import Header from "./Header";
import { LayoutMainContainer, MainSection } from "./ProtectedPageLayoutStyle";
import { useMediaQuery, useTheme } from "@mui/material";

export const searchedValueContext = createContext(
  {} as IProtectedPageLayout.ISearchContextProps
);

const ProtectedPageLayout: React.FunctionComponent<
  IProtectedPageLayout.IProps
> = ({ children }) => {
  const [isShowSidebar, setIsShowSidebar] = React.useState(false);
  const [isHideOnMobile, setisHideOnMobile] = React.useState<boolean>(false);
  const [searchedValue, setSearchedValue] = React.useState("");
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    if (isMobileDevice) {
      isShowSidebar && setIsShowSidebar(false);
    } else {
      !isShowSidebar && setIsShowSidebar(true);
    }
  }, [isMobileDevice]);

  return (
    <searchedValueContext.Provider value={{ searchedValue, setSearchedValue,isShowSidebar }}>
      <LayoutMainContainer>
        <Sidebar
          isShowSidebar={isShowSidebar}
          setIsShowSidebar={setIsShowSidebar}
          isHideOnMobile={isHideOnMobile}
          setisHideOnMobile={setisHideOnMobile}
        />
        <MainSection
          isShowSidebar={isShowSidebar}
          isMobileDevice={isMobileDevice}
        >
          <Header />
          <div>{children}</div>
        </MainSection>
      </LayoutMainContainer>
    </searchedValueContext.Provider>
  );
};

export default ProtectedPageLayout;
