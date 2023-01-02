declare namespace MediaDetailsCardProps {
  export type movieData = {
    ComingSoon: true;
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    totalSeasons: string;
    Response: string;
    Images: Array[string];
  };

  export interface IProps {
    movieData: movieData;
    buttonText: Array[string];
    imageWidth: string;
    imageHeight: string;
  }
}

export { MediaDetailsCardProps };
