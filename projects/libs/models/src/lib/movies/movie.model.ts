import { RatingMovie } from '.';

export type Type = 'movie' | 'serie' | 'n/a';

export interface MovieDetail {
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
  Ratings: RatingMovie[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: Type;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
