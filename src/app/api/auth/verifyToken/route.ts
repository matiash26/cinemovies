import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import type { IVerify, ICookie } from '../../type';

const SECRET_KEY = process.env.SECRET_KEY as string;

export function POST(): NextResponse<IVerify> {
  const cookieStore = cookies();
  const token = cookieStore.get('token') as ICookie;
  const result = verify(token?.value, SECRET_KEY) as IVerify;
  return NextResponse.json(result);
}
