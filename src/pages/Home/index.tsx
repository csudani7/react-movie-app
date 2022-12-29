import React from "react";
import { MediaCard } from "../../components";
import { moviesData } from "../../utils";
import { theme } from "../../Theme/theme";
import styled from "styled-components";

const Home = () => {
  const [movieList, setMovieList] = React.useState(moviesData);

  React.useEffect(() => {
    setMovieList(moviesData);
  }, []);

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
