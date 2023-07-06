export interface IDetail {
  backdrop_path: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export interface ITag {
  id: number;
  name: string;
}
export interface IMeta {
  title: string;
  description: string;
}
interface IParams {
  params: {
    searchById: string;
  };
}