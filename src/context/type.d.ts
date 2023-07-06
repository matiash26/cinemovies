import { type Dispatch, type SetStateAction, type ReactNode } from 'react';

export interface IUser {
  subs: boolean;
}
export interface IChild {
  children: ReactNode;
}
export interface IContext {
  user: IUser | undefined;
  setUser: Dispatch<SetStateAction<IUser | undefined>>;
}
