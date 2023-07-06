import type { IMovies } from '@/app/types';
import type { TParams } from './type';

import { searchByName } from '@/utils/movies';
import { Movie } from '@/components/Movie';
import './style.css';
async function Home({ params: { searchName } }: TParams): Promise<JSX.Element> {
  let movieData: IMovies[] = [];

  try {
    movieData = await searchByName(searchName);
  } catch (error) {
    console.error(error);
  }

  return (
    <main className="contentMovie">
      {movieData.map((data: IMovies) => (
        <Movie key={data.id} info={data} />
      ))}
    </main>
  );
}
export default Home;
