import { type IMovies } from '@/app/types';
import { AiOutlineStar } from 'react-icons/ai';
import Link from 'next/link';
import './style.css';

interface TParams {
  info: IMovies;
}
export const Movie = ({ info }: TParams): JSX.Element => {
  const imgUrl = String(process.env.URL_IMG);
  const vote = info.vote_average.toFixed(1);
  const date = info.release_date.split('-')[0];
  const banner: string =
    info.backdrop_path !== null
      ? `${imgUrl}${info.backdrop_path}`
      : '/notFound.jpg';

  return (
    <div className="movieCard">
      <div className="movieBanner">
        <Link href={`/filmes/${info.id}`}>assistir agora</Link>
        <img className="movieImg" src={banner} alt={info.title} />
      </div>
      <div className="movieContent">
        <span className="title">{info.title}</span>
        <div className="movieDescription">
          <span>{date}</span>
          <div className="rate">
            <AiOutlineStar />
            <span>
              {vote} <span> / 10</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
