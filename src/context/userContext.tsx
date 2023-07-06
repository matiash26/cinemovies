'use client';
import { createContext, useState } from 'react';
import { type IUser, type IChild, type IContext } from './type';

export const UserContext = createContext<IContext>({
  user: { subs: false },
  setUser: () => {},
});

function UserProvider({ children }: IChild): JSX.Element {
  const [user, setUser] = useState<IUser>();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
