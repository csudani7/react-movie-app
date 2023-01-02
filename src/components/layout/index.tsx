//#Global Imports
import React, { createContext } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

//#local Imports
import Sidebar from "./Sidebar";
import Header from "./Header";
import IProtectedPageLayout from "./ProtectedPageLayout";
import { LayoutMainContainer, MainSection } from "./ProtectedPageLayoutStyle";

export const searchedValueContext = createContext({} as IProtectedPageLayout.ISearchContextProps);

const ProtectedPageLayout: React.FunctionComponent<IProtectedPageLayout.IProps> = ({
  children,
}) => {
  const [isshowsidebar, setIsShowSidebar] = React.useState<boolean>(false);
  const [isHideOnMobile, setisHideOnMobile] = React.useState<boolean>(false);
  const [searchedValue, setSearchedValue] = React.useState<string>("");
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));

  React.useEffect(() => {
    if (isMobileDevice) {
      isshowsidebar && setIsShowSidebar(false);
    } else {
      !isshowsidebar && setIsShowSidebar(true);
    }
  }, [isMobileDevice]);

  return (
    <searchedValueContext.Provider value={{ searchedValue, setSearchedValue, isshowsidebar }}>
      <LayoutMainContainer>
        <Sidebar
          isshowsidebar={isshowsidebar}
          setIsShowSidebar={setIsShowSidebar}
          isHideOnMobile={isHideOnMobile}
          setisHideOnMobile={setisHideOnMobile}
        />
        <MainSection isshowsidebar={isshowsidebar} isMobileDevice={isMobileDevice}>
          <Header />
          <div>{children}</div>
        </MainSection>
      </LayoutMainContainer>
    </searchedValueContext.Provider>
  );
};

export default ProtectedPageLayout;
