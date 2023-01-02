import { LightIcon, MoreOptionsIcon } from "../../../assets/icons";
import SearchBar from "../../ui/SearchBar";
import { HeaderIconsDiv, HeaderMainContainer } from "./HeaderStyle";

const Header = () => {
  return (
    <HeaderMainContainer>
      <SearchBar />
      <HeaderIconsDiv>
        <LightIcon />
        <MoreOptionsIcon />
      </HeaderIconsDiv>
    </HeaderMainContainer>
  );
};

export default Header;
