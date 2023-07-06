import type { IAuth, IUser } from './type';

export async function auth(user: IAuth): Promise<{ token: string }> {
  const data = {
    email: user['e-mail'],
    password: user.password,
  };
  const response = await fetch(`/api/auth/login`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw Error('Falha ao fazer ao fazer o login');

  return await response.json();
}

export async function verifyToken(token: string): Promise<IUser> {
  const response = await fetch('/api/auth/verifyToken', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      cookie: `token=${token}`,
    },
  });
  if (!response.ok) throw Error('Falha ao verificar o token');

  return await response.json();
}
