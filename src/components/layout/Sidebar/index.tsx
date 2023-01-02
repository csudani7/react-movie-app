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
  isShowSidebar,
  setIsShowSidebar,
  setisHideOnMobile,
  isHideOnMobile,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isActiveTab, setIsActiveTab] = React.useState(location?.pathname);

  return (
    <MainContainer isShowSidebar={isShowSidebar} isHideOnMobile={isHideOnMobile}>
      <div>
        {/* HamBerger Section */}
        <HamBerger isShowSidebar={isShowSidebar}>
          <HamBergerSubDiv
            onClick={() => setIsShowSidebar(!isShowSidebar)}
            isShowSidebar={isShowSidebar}
          >
            <div />
            <div />
            <div />
          </HamBergerSubDiv>
        </HamBerger>
        {/* User Profile Image Section */}
        <ProfileImageContainer isShowSidebar={isShowSidebar}>
          <ProfileImage
            isShowSidebar={isShowSidebar}
            onClick={() => (setisHideOnMobile(true), setIsActiveTab("/"), navigate("/"))}
          >
            <UserImage />
          </ProfileImage>
          <UserName isShowSidebar={isShowSidebar}>Eric Hoffman</UserName>
        </ProfileImageContainer>
        <SideBarLineBreaker padding="15px 0px" />
        <Menu isShowSidebar={isShowSidebar}>
          {sidebarMenuList.map((menu, index) => (
            <div key={index}>
              <NavLink
                onClick={() => {
                  setIsActiveTab("/");
                  setisHideOnMobile(true);
                }}
                to="/"
                isShowSidebar={isShowSidebar}
              >
                <MenuIcon isShowSidebar={isShowSidebar}>
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
                  isShowSidebar={isShowSidebar}
                >
                  {menu.name}
                </MenuName>
                <ActiveBorder isActiveTab={isActiveTab === menu.link} />
                <MobileMenuName className="mobileMenuName" isShowSidebar={isShowSidebar}>
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
