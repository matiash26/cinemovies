import { type ISubmit } from '@/app/(Authenticated)/subscription/components/FormPayment/type';
export interface IAuth {
  'e-mail': string;
  password: string;
}
export interface IUser {
  email: string;
  password: string;
  iat: number;
  subs: boolean;
  token: string;
}
export interface ISignature extends ISubmit {}
