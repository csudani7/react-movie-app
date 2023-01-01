//#Global Imports
import React from "react";

//#Local Imports
import { theme } from "../../../Theme/theme";
import Button from "../Button";
import RangeSlider from "../RangeSlider";
import { MediaDetailsCardProps } from "./MediaDetailsCard";
import {
  ButtonContainer,
  CardDetailsContainer,
  DetailsWrapper,
  ImageContainer,
  MovieDescription,
  OtherDetailsSubContainer,
  OtherDetailsWrapper,
  Rating,
  RatingsContainer,
  Title,
} from "./MediaDetailsCardStyle";

const MediaDetailsCard: React.FC<MediaDetailsCardProps.IProps> = ({
  movieData,
  buttonText,
  imageWidth,
  imageHeight,
}) => {
  return (
    <CardDetailsContainer>
      <ImageContainer width={imageWidth} height={imageHeight}>
        <img src={movieData?.Poster} />
      </ImageContainer>
      <DetailsWrapper>
        <Title>{movieData?.Title}</Title>
        <RatingsContainer>
          <RangeSlider
            value={Number(movieData?.imdbRating)}
            width="111px"
            height="8px"
            bgColor={theme.colors.aquaBlue}
          />
          <Rating> {movieData?.imdbRating}/10</Rating>
        </RatingsContainer>
        <OtherDetailsWrapper>
          <OtherDetailsSubContainer>
            <div>Year:</div>
            <div>Running Time:</div>
            <div>Directed By:</div>
            <div>Language:</div>
          </OtherDetailsSubContainer>
          <OtherDetailsSubContainer>
            <div>{movieData?.Year}</div>
            <div>{movieData?.Runtime}</div>
            <div>{movieData?.Director}</div>
            <div>{movieData?.Language}</div>
          </OtherDetailsSubContainer>
        </OtherDetailsWrapper>
        <MovieDescription>{movieData?.Plot}</MovieDescription>
        <ButtonContainer>
          <Button>{buttonText[0]}</Button>
          <Button
            bgColor="transparent"
            fontColor={theme.colors.aquaBlue}
            borderColor={theme.colors.aquaBlue}
            borderWidth="1px"
          >
            {buttonText[1]}
          </Button>
        </ButtonContainer>
      </DetailsWrapper>
    </CardDetailsContainer>
  );
};

export default MediaDetailsCard;
