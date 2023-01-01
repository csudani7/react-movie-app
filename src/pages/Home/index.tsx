import React from "react";

import { MediaCard, MediaDetailsCard } from "../../components";
import { moviesData } from "../../utils";
import { theme } from "../../Theme/theme";
import { searchedValueContext } from "../../components/layout";
import { HomeMainContainer, NoResultTextWrappr, Row } from "./HomeStyle";

const Home = () => {
  const [movieList, setMovieList] = React.useState(moviesData);
  const { searchedValue, isShowSidebar } =
    React.useContext(searchedValueContext);
  const [showSelectedMovieDetails, setShowSelectedMovieDetails] =
    React.useState("");

  const WINDOW_INNER_WIDTH = window.innerWidth;
  const SIDE_MARGIN = isShowSidebar ? 375 : 110;
  const CARD_GAP_VALUE = 26;
  const USABLE_WIDDTH = WINDOW_INNER_WIDTH - SIDE_MARGIN + CARD_GAP_VALUE;
  const MEDIA_CARD_WIDTH_WITH_GAP = 178 + CARD_GAP_VALUE;
  const NO_OF_COLUMNS = Math.trunc(USABLE_WIDDTH / MEDIA_CARD_WIDTH_WITH_GAP);

  React.useEffect(() => {
    let tempData = moviesData;
    if (searchedValue !== "") {
      tempData = tempData.filter((movie) =>
        movie.Title.toLowerCase().includes(searchedValue.toLowerCase())
      );
    }
    setMovieList(tempData);
  }, [searchedValue]);

  return (
    <HomeMainContainer length={movieList.length}>
      {movieList.length === 0 ? (
        <NoResultTextWrappr>
          No results found for your search.
        </NoResultTextWrappr>
      ) : (
        <>
          {Array.from(
            { length: Math.ceil(movieList.length / NO_OF_COLUMNS) },
            (_, i) => (
              <>
                {movieList
                  .slice(i * NO_OF_COLUMNS, (i + 1) * NO_OF_COLUMNS)
                  .map((movieData: any, indexTwo) => {
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
                  length={
                    movieList.slice(i * NO_OF_COLUMNS, (i + 1) * NO_OF_COLUMNS)
                      ?.length
                  }
                  NO_OF_COLUMNS={NO_OF_COLUMNS}
                  CARD_GAP_VALUE={CARD_GAP_VALUE}
                >
                  {movieList
                    .slice(i * NO_OF_COLUMNS, (i + 1) * NO_OF_COLUMNS)
                    .map((data, index) => (
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
                        onClickHandler={(title) =>
                          setShowSelectedMovieDetails(title)
                        }
                      />
                    ))}
                </Row>
              </>
            )
          )}
        </>
      )}
    </HomeMainContainer>
  );
};

export default Home;
