import type { IDetail, ITag, IMeta, IParams } from './type';
import { detailById } from '@/utils/movies';
import { Tag } from '@/components/Tag';
import './style.css';

export async function generateMetadata({
  params: { searchById },
}: IParams): Promise<IMeta> {
  const detail = await detailById(searchById);

  if (detail.title === '')
    return { title: 'Filme não encontrado', description: '' };

  return {
    title: detail.title,
    description: detail.overview,
  };
}

async function Detail({
  params: { searchById },
}: IParams): Promise<JSX.Element> {
  let detail!: IDetail;
  try {
    detail = await detailById(searchById);
  } catch (error) {
    console.error(error);
  }

  const imgUrl: string = process.env.URL_IMG as string;
  const banner: string =
    detail.backdrop_path !== null
      ? `${imgUrl}${detail.backdrop_path}`
      : '/notFound.jpg';

  return (
    <main className="detailtContainer">
      <div
        className="detailBanner"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
      <section className="detailContent">
        <div className="detailPoster">
          <img src={`${imgUrl}${banner}`} alt="#" />
        </div>
        <div className='descContent'>
          <div className="detailDesc">
            <h1>{detail.title}</h1>
            {detail.genres.map((gender: ITag) => (
              <Tag key={gender.id} name={gender.name} />
            ))}
          </div>
          <div className="overViewContainer">
            <h1>Descrição</h1>
            <p>{detail.overview}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Detail;
