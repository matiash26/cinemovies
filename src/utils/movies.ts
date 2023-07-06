import { type IDetail } from '@/app/(Authenticated)/filmes/[searchById]/type';
import { type IMovies } from '@/app/types';

const url: string = process.env.URL_DATA as string;
const headers = {
  accept: 'application/json',
  Authorization: `Bearer ${process.env.TOKEN as string}`,
};

export async function getPopular(): Promise<IMovies[]> {
  const response = await fetch(`${url}/movie/popular?language=pt-BR&page=1`, {
    headers,
    next: {
      revalidate: 3600,
    },
  });
  if (!response.ok) throw new Error('Erro ao buscar os filmes populares');
  const { results } = await response.json();

  return results;
}
export async function getTopRated(): Promise<IMovies[]> {
  const response = await fetch(`${url}/movie/top_rated?language=en-US&page=1`, {
    headers,
    next: {
      revalidate: 3600,
    },
  });
  if (!response.ok) throw new Error('Filme não encontrado');
  const detailData = await response.json();
  return detailData.results;
}

export async function searchByName(search: string): Promise<IMovies[]> {
  const response = await fetch(
    `${url}/search/movie?query=${search}&include_adult=true&language=pt-BR&page=1`,
    {
      headers,
    }
  );
  if (!response.ok) throw new Error('Filme não encontrado');
  const { results } = await response.json();

  return results;
}

export async function detailById(id: string): Promise<IDetail> {
  const response = await fetch(`${url}/movie/${id}?language=pt-BR`, {
    headers,
  });
  if (!response.ok) throw new Error('Filme não encontrado');

  const detailData = await response.json();
  return detailData;
}
