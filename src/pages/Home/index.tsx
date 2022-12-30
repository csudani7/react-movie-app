import React from "react";
import { MediaCard, MediaDetailsCard } from "../../components";
import { moviesData } from "../../utils";
import { theme } from "../../Theme/theme";
import styled from "styled-components";
import { searchedValueContext } from "../../components/layout";

const Home = () => {
  const [movieList, setMovieList] = React.useState(moviesData);
  const { searchedValue } = React.useContext(searchedValueContext);
  const [showSelectedMovieDetails, setShowSelectedMovieDetails] =
    React.useState("");

  React.useEffect(() => {
    setMovieList(moviesData);
  }, []);

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
    <HomeMainContainer>
      {movieList?.map((data: any) => (
        <>
          {data?.Title === showSelectedMovieDetails && (
            <MediaDetailsCard
              movieData={data}
              buttonText={["Play Movie", "Watch Trailer"]}
              imageWidth="334px"
              imageHeight="389px"
            />
          )}
          <MediaCard
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
        </>
      ))}
    </HomeMainContainer>
  );
};

export const HomeMainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 26px;
  width: 100%;
`;

export default Home;
