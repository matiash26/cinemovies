'use client';

import { useEffect, useState, useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import type { IChildren } from './type';
import { UserContext } from '@/context/userContext';
import { verifyToken } from '@/utils/auth';
import cookies from 'js-cookie';
import dynamic from 'next/dynamic';

function CheckRoute({ children }: IChildren): JSX.Element | null {
  const [isSub, setIsSub] = useState<boolean>(false);
  const token = cookies.get('token') as string;
  const router = useRouter();
  const path = usePathname();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (token === undefined) {
        router.push('/login');
      }
    }
    // essa função Pop evita que o usuário volte a página anterior (que não tem acesso)
    // ao apertar o botão back do mouse
    const handlePopstate = (): void => {
      if (!isSub && path === '/') {
        router.replace('/subscription');
      }
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [token]);

  useEffect(() => {
    async function checkToken(): Promise<void> {
      try {
        if (token !== undefined) {
          const response = await verifyToken(token);
          setUser({ subs: response.subs });
          if (!response.subs) {
            setIsSub(response.subs);
            router.push('/subscription');
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    checkToken().catch((error) => {
      console.error(error);
    });
  }, [token]);

  return <>{token === undefined ? null : children}</>;
}
export default dynamic(async () => await Promise.resolve(CheckRoute), {
  ssr: false,
});
