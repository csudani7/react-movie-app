import React, { useContext } from "react";
import { MediaCard } from "../../components";
import { moviesData } from "../../utils";
import { theme } from "../../Theme/theme";
import styled from "styled-components";
import { searchedValueContext } from "../../components/layout";

const Home = () => {
  const [movieList, setMovieList] = React.useState(moviesData);
  const { searchedValue } = useContext(searchedValueContext);

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
      {movieList?.map((data) => (
        <MediaCard
          image={data?.Poster}
          width="158px"
          bgColor={theme.colors.secondary}
          fontColor={theme.colors.gray100}
          height="278px"
          imgHeight="188px"
          imgWidth="157px"
          title={data?.Title}
        />
      ))}
    </HomeMainContainer>
  );
};

export const HomeMainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 26px;
`;

export default Home;
