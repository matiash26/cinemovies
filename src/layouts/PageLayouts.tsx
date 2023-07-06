'use client';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Search from '@/components/search';

function PageLayouts({ children }: { children: React.ReactNode }): JSX.Element {
  const path = usePathname();

  if (path.match('/search*') !== null || path === '/' || path === '/filmes') {
    return (
      <div className="containerMovie">
        <Header />
        <Search />
        <main className="contentMovie">{children}</main>
      </div>
    );
  } else if (path.match('/filmes/*') !== null) {
    return (
      <div className="containerMovie">
        <Header />
        {children}
      </div>
    );
  } else {
    return <>{children}</>;
  }
}

export default PageLayouts;
