declare namespace IMediaCard {
  export interface IProps {
    image: string;
    width: string;
    bgColor: string;
    fontColor: string;
    height: string;
    imgHeight: string;
    imgWidth: string;
    title: string;
    onClickHandler: (string) => void;
  }
}

export { IMediaCard };
