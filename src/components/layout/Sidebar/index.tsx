//#Global Imports
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

//#Local Imports
import { UserImage } from "../../../assets/icons";
import { sidebarMenuList } from "../../../utils";
import { theme } from "../../../Theme/theme";
import ISidebarProps from "./Sidebar";

import {
  ActiveBorder,
  HamBerger,
  HamBergerSubDiv,
  MainContainer,
  Menu,
  MenuIcon,
  MenuName,
  MobileMenuName,
  NavLink,
  ProfileImage,
  ProfileImageContainer,
  SideBarLineBreaker,
  UserName,
} from "./SidebarStyle";

const Sidebar: React.FC<ISidebarProps.IProps> = ({
  isshowsidebar,
  setIsShowSidebar,
  setisHideOnMobile,
  isHideOnMobile,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isActiveTab, setIsActiveTab] = React.useState(location?.pathname);

  return (
    <MainContainer isshowsidebar={isshowsidebar} isHideOnMobile={isHideOnMobile}>
      <div>
        {/* HamBerger Section */}
        <HamBerger isshowsidebar={isshowsidebar}>
          <HamBergerSubDiv
            onClick={() => setIsShowSidebar(!isshowsidebar)}
            isshowsidebar={isshowsidebar}
          >
            <div />
            <div />
            <div />
          </HamBergerSubDiv>
        </HamBerger>
        {/* User Profile Image Section */}
        <ProfileImageContainer isshowsidebar={isshowsidebar}>
          <ProfileImage
            isshowsidebar={isshowsidebar}
            onClick={() => (setisHideOnMobile(true), setIsActiveTab("/"), navigate("/"))}
          >
            <UserImage />
          </ProfileImage>
          <UserName isshowsidebar={isshowsidebar}>Eric Hoffman</UserName>
        </ProfileImageContainer>
        <SideBarLineBreaker padding="15px 0px" />
        <Menu isshowsidebar={isshowsidebar}>
          {sidebarMenuList.map((menu, index) => (
            <div key={index}>
              <NavLink
                onClick={() => {
                  setIsActiveTab("/");
                  setisHideOnMobile(true);
                }}
                to="/"
                isshowsidebar={isshowsidebar}
              >
                <MenuIcon isshowsidebar={isshowsidebar}>
                  {
                    <menu.icon
                      fillColor={
                        isActiveTab === menu?.link ? theme.colors.aquaBlue : theme.colors.gray100
                      }
                    />
                  }
                </MenuIcon>
                <MenuName
                  index={index}
                  isActiveTab={isActiveTab === menu.link}
                  isshowsidebar={isshowsidebar}
                >
                  {menu.name}
                </MenuName>
                <ActiveBorder isActiveTab={isActiveTab === menu.link} />
                <MobileMenuName className="mobileMenuName" isshowsidebar={isshowsidebar}>
                  {menu.name}
                </MobileMenuName>
              </NavLink>
              {(index === 4 || index === 6) && <SideBarLineBreaker padding="13px 0px" />}
            </div>
          ))}
        </Menu>
      </div>
    </MainContainer>
  );
};

export default Sidebar;
