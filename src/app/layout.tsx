import { Poppins } from 'next/font/google';
import '@/app/globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '500', '800'] });
export const metadata = {
  title: 'CineMovies',
  description: 'website de filmes para aprimorar Nextjs e Typescript',
};

function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
export default RootLayout;
