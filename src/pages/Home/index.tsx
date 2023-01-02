//#Global Imports
import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

//#Local Imports
import { MediaCard, MediaDetailsCard } from "../../components";
import { moviesData } from "../../utils";
import { theme } from "../../Theme/theme";
import { searchedValueContext } from "../../components/layout";
import { HomeMainContainer, NoResultTextWrappr, Row } from "./HomeStyle";

const Home = () => {
  const [movieList, setMovieList] = React.useState(moviesData);
  const { searchedValue, isshowsidebar } = React.useContext(searchedValueContext);
  const [showSelectedMovieDetails, setShowSelectedMovieDetails] = React.useState("");
  const muiTheme = useTheme();
  const isMobileDevice = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const WINDOW_INNER_WIDTH = window.innerWidth;
  const SIDE_MARGIN = isshowsidebar && !isMobileDevice ? 375 : 110;
  const CARD_GAP_VALUE = isMobileDevice ? 0 : 26;
  const USABLE_WIDDTH = WINDOW_INNER_WIDTH - SIDE_MARGIN + CARD_GAP_VALUE;
  const MEDIA_CARD_WITH = 178;
  const MEDIA_CARD_WIDTH_WITH_GAP = MEDIA_CARD_WITH + CARD_GAP_VALUE;
  const NO_OF_COLUMNS = Math.trunc(USABLE_WIDDTH / MEDIA_CARD_WIDTH_WITH_GAP);
  const USABEL_WIDTH_FOR_NOT_FULLY_ROW = isshowsidebar ? USABLE_WIDDTH + 5 : USABLE_WIDDTH - 10;

  const cardGapValueForNotFullFilledRow = Math.trunc(
    (USABEL_WIDTH_FOR_NOT_FULLY_ROW - NO_OF_COLUMNS * MEDIA_CARD_WITH) / NO_OF_COLUMNS,
  );

  React.useEffect(() => {
    let tempData = moviesData;
    if (searchedValue !== "") {
      tempData = tempData.filter((movie) =>
        movie.Title.toLowerCase().includes(searchedValue.toLowerCase()),
      );
    }
    setMovieList(tempData);
  }, [searchedValue]);

  return (
    <HomeMainContainer length={movieList?.length}>
      {movieList?.length === 0 ? (
        <NoResultTextWrappr>No results found for your search.</NoResultTextWrappr>
      ) : (
        <>
          {[...Array(Math.ceil(movieList?.length / NO_OF_COLUMNS))].map((_, i) => (
            <>
              {movieList
                ?.slice(i * NO_OF_COLUMNS, (i + 1) * NO_OF_COLUMNS)
                ?.map((movieData: any, indexTwo) => {
                  return (
                    movieData?.Title === showSelectedMovieDetails && (
                      <MediaDetailsCard
                        key={indexTwo}
                        movieData={movieData}
                        buttonText={["Play Movie", "Watch Trailer"]}
                        imageWidth="334px"
                        imageHeight="389px"
                      />
                    )
                  );
                })}
              <Row
                length={movieList?.slice(i * NO_OF_COLUMNS, (i + 1) * NO_OF_COLUMNS)?.length}
                NO_OF_COLUMNS={NO_OF_COLUMNS}
                CARD_GAP_VALUE={cardGapValueForNotFullFilledRow}
              >
                {movieList
                  ?.slice(i * NO_OF_COLUMNS, (i + 1) * NO_OF_COLUMNS)
                  ?.map((data, index) => (
                    <MediaCard
                      key={index}
                      image={data?.Poster}
                      width="158px"
                      bgColor={theme.colors.secondary}
                      fontColor={theme.colors.gray100}
                      height="278px"
                      imgHeight="190px"
                      imgWidth="157px"
                      title={data?.Title}
                      onClickHandler={(title) => setShowSelectedMovieDetails(title)}
                    />
                  ))}
              </Row>
            </>
          ))}
        </>
      )}
    </HomeMainContainer>
  );
};

export default Home;
