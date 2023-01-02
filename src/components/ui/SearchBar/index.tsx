//#Global Imports
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

//#Local Imports
import { CloseIcon, SearchIcon } from "../../../assets/icons";
import { theme } from "../../../Theme/theme";
import { CloseContainer, Input, MainSearchbar, SearchIconContainer } from "./SearchbarStyle";
import { searchedValueContext } from "../../layout";

const SearchBar = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = React.useState(false);
  const muiTheme = useTheme();
  const isMobileDevice = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const { searchedValue, setSearchedValue } = React.useContext(searchedValueContext);

  return (
    <MainSearchbar isSearchBarOpen={isSearchBarOpen} isMobileDevice={isMobileDevice}>
      <SearchIconContainer
        isSearchBarOpen={isSearchBarOpen}
        onClick={() => {
          setIsSearchBarOpen(!isSearchBarOpen);
        }}
      >
        <SearchIcon fillColor={theme.colors.gray100} width="23" height="23" />
      </SearchIconContainer>

      {isSearchBarOpen && (
        <>
          <Input
            onChange={(e) => setSearchedValue(e.target.value)}
            value={searchedValue}
            isSearchBarOpen={isSearchBarOpen}
            placeholder="Title, Movies, Keyword"
          />
          <CloseContainer
            searcedhValue={searchedValue}
            onClick={() => {
              setSearchedValue("");
            }}
          >
            <CloseIcon />
          </CloseContainer>
        </>
      )}
    </MainSearchbar>
  );
};

export default SearchBar;
