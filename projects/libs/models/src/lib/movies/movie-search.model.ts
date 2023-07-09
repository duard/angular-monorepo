import { Type } from '.';

export interface SearchMovies {
  Title: string;
  Year: string;
  imdbID: string;
  Type: Type;
  Poster: string;
}

export interface SearchResult {
  Search: SearchMovies[];
  totalResults: string;
  Response: boolean;
}
