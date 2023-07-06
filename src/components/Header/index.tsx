'use client';
import { AiOutlineHome, AiOutlineYoutube } from 'react-icons/ai';
import { FiX, FiAlignJustify } from 'react-icons/fi';
import { IoPersonOutline } from 'react-icons/io5';
import { useState } from 'react';
import { LuMonitor } from 'react-icons/lu';
import { useRouter } from 'next/navigation';
import { CgNotes } from 'react-icons/cg';
import Link from 'next/link';
import cookies from 'js-cookie';
import './style.css';

const Header = (): JSX.Element => {
  const [menuUser, setMenuUser] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const router = useRouter();
  const logOut = (): void => {
    cookies.remove('token');
    router.push('/login');
  };
  const handleMenuUser = (): void => {
    setMenuUser((state) => !state);
  };
  const handleMobileMenu = (): void => {
    setMobileMenu((state) => !state);
  };
  return (
    <header className={mobileMenu ? 'mobile' : ''}>
      <nav>
        <div>
          <Link href="/" className="logo">
            CineMovies
          </Link>
        </div>
        <span className="exitBtn" onClick={handleMobileMenu}>
          {mobileMenu ? <FiX /> : <FiAlignJustify />}
        </span>
        <ul className="menulist">
          <Link href="/">
            <li onClick={handleMobileMenu}>
              <AiOutlineHome />
              home
            </li>
          </Link>
          <Link href="#">
            <li onClick={handleMobileMenu}>
              <AiOutlineYoutube />
              filmes
            </li>
          </Link>
          <Link href="#">
            <li onClick={handleMobileMenu}>
              <CgNotes />
              gêneros
            </li>
          </Link>
          <Link href="#">
            <li onClick={handleMobileMenu}>
              <LuMonitor />
              séries
            </li>
          </Link>
        </ul>
        <div className="user">
          <IoPersonOutline onClick={handleMenuUser} />
          <ul className={menuUser ? 'visible' : ''}>
            <li>
              <Link href="/subscription">Assinatura</Link>
            </li>
            <li onClick={logOut}>Sair</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
