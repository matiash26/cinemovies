import { cookies } from 'next/headers';
import { type ISignature } from './type';
import { verify, sign } from 'jsonwebtoken';
import { type NextRequest, NextResponse } from 'next/server';
import type { IVerify, ICookie } from '../type';

const SECRET_KEY = process.env.SECRET_KEY as string;

export async function POST(
  req: NextRequest
): Promise<NextResponse<ISignature> | undefined> {
  const data = await req.json();
  if (data !== undefined) {
    const cookieStore = cookies();
    const token = cookieStore.get('token') as ICookie;
    const result = verify(token?.value, SECRET_KEY) as IVerify;

    const subs = !result.subs;
    const tokenSubscribed = sign({ ...result, subs }, SECRET_KEY);
    return NextResponse.json({ token: tokenSubscribed, subs });
  }
}
