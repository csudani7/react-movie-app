// Globle imports
import { CardMedia } from "@mui/material";
import React from "react";

// Local imports
import { AddIcon, PlayIcon } from "../../../assets/icons";
import { IMediaCard } from "./MediaCard";
import { Actions, BaseCard, ImgCard, Title } from "./MediaCardStyles";

const MediaCard: React.FunctionComponent<IMediaCard.IProps> = ({
  image,
  width,
  height,
  bgColor,
  imgWidth,
  imgHeight,
  fontColor,
  title,
  onClickHandler,
}) => {
  return (
    <BaseCard width={width} height={height} bgColor={bgColor}>
      <ImgCard>
        <CardMedia
          component="img"
          alt="green iguana"
          image={image}
          width={imgWidth}
          height={imgHeight}
          onClick={() => onClickHandler(title)}
        />
      </ImgCard>
      <Title fontColor={fontColor}>{title}</Title>
      <Actions>
        <PlayIcon />
        <AddIcon />
      </Actions>
    </BaseCard>
  );
};

export default MediaCard;
