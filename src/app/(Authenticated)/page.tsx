import { getPopular, getTopRated } from '@/utils/movies';
import ContentHighLight from '@/components/ContentHighLight';
import { Movie } from '@/components/Movie';
import Slider from '@/components/Slider';

import './style.css';
async function Home(): Promise<JSX.Element> {
  const popular = await getPopular();
  const topRated = await getTopRated();
  const [moviePopular, movieTopRated] = await Promise.all([popular, topRated]);
  return (
    <div className="mainHomePage">
      <ContentHighLight title="TOP - Filmes">
        <Slider>
          {moviePopular.map((movie) => (
            <Movie key={movie.id} info={movie} />
          ))}
        </Slider>
      </ContentHighLight>
      <ContentHighLight title="TOP Rate - Filmes">
        <Slider>
          {movieTopRated.map((movie) => (
            <Movie key={movie.id} info={movie} />
          ))}
        </Slider>
      </ContentHighLight>
    </div>
  );
}
export default Home;
