// Globle imports
import { CardMedia, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
// Local imports
import { AddIcon, PlayIcon } from "../../../assets/icons";
import { theme } from "../../../Theme/theme";
import { IMediaCard } from "./MediaCard";

const MediaCard: React.FunctionComponent<IMediaCard.IProps> = ({
  image,
  width,
  height,
  bgColor,
  imgWidth,
  imgHeight,
  fontColor,
  title,
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
        />
      </ImgCard>

      <Title>
        <Typography fontStyle={{ color: fontColor }}>{title}</Typography>
      </Title>

      <Actions>
        <PlayIcon />
        <AddIcon />
      </Actions>
    </BaseCard>
  );
};

export default MediaCard;

export const BaseCard = styled.div<{
  width: string;
  bgColor: string;
  height: string;
}>`
  display: flex;
  flex-direction: column;
  background: ${({ bgColor }) => `${bgColor} !important`};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 11px;
`;

const ImgCard = styled.div`
  margin: 10px 11px 10px;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: start;
  margin-left: 10px;
  margin-bottom: 12px;
  font-family: ${theme.typography.openSansFont};
`;

const Actions = styled.div`
  display: flex;
  justify-content: start;
  margin-left: 10px;
  cursor: pointer;
  gap: 16px;
`;
