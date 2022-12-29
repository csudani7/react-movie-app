import React from "react";
import { CloseIcon, SearchIcon } from "../../../assets/icons";
import { theme } from "../../../Theme/theme";
import {
  CloseContainer,
  Input,
  MainSearchbar,
  SearchIconContainer,
} from "./SearchbarStyle";

const SearchBar = () => {
  const [searchedValue, setSearchedValue] = React.useState("");
  const [barOpened, setBarOpened] = React.useState(false);
  console.log(barOpened, "barOpened");

  return (
    <MainSearchbar barOpened={barOpened}>
      <SearchIconContainer
        barOpened={barOpened}
        onClick={() => {
          setBarOpened(true);
        }}
      >
        <SearchIcon
          fillColor={theme.colors.gray100}
          width="23"
          height="23"
        />
      </SearchIconContainer>

      {barOpened && (
        <>
          <Input
            onChange={(e) => setSearchedValue(e.target.value)}
            value={searchedValue}
            barOpened={barOpened}
            placeholder="Title, Movies, Keyword"
          />
          <CloseContainer
            searcedhValue={searchedValue}
            onClick={() => {
              setBarOpened(false);
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
