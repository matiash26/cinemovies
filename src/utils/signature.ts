import { type IUser, type ISignature } from './type';

export async function signature(
  token: string,
  data: ISignature
): Promise<IUser> {
  const response = await fetch('/api/signature', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      cookie: token,
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw Error('Erro ao fazer assinatura');
  return await response.json();
}
