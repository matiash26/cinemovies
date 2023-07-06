export interface IVerify {
  email: string;
  password: string;
  iat: number;
  subs: boolean;
}

export interface ICookie {
  name: string;
  value: string;
  path: string;
}
