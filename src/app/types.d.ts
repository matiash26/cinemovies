export interface IMovies {
  key: number;
  genres: [];
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title?: string;
  vote_average: number;
  vote_count: number;
  date: string;
  name?: string;
  banner: string;
  vote: number;
}

export interface IFonts {
  subsets: string[];
  weight: string[];
}
