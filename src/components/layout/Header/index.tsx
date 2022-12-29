import { LightIcon, MoreOptionsIcon } from "../../../assets/icons";
import { HeaderIconsDiv, HeaderMainContainer } from "./HeaderStyle";

const Header = () => {
  return (
    <HeaderMainContainer>
      <div>Searchbar will be here.</div>
      <HeaderIconsDiv>
        <LightIcon />
        <MoreOptionsIcon />
      </HeaderIconsDiv>
    </HeaderMainContainer>
  );
};

export default Header;
