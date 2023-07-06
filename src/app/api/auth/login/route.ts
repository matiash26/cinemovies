import { NextResponse, type NextRequest } from 'next/server';
import { sign } from 'jsonwebtoken';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const SECRET_KEY = process.env.SECRET_KEY as string;

  const { email, password } = await req.json();
  if (email === null && password === null) return NextResponse.json(null);
  const token = sign({ email, subs: false }, SECRET_KEY);
  return NextResponse.json({ token });
}
