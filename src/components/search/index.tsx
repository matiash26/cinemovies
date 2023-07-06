'use client';
import { useState, type FormEvent } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import './style.css';

const Search = (): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form onSubmit={handleSubmit} className="search">
      <label htmlFor="search">
        <IoSearchOutline />
        <input
          type="text"
          id="search"
          onChange={({ target }) => {
            setSearch(target.value);
          }}
          placeholder="Buscar filme..."
        />
      </label>
    </form>
  );
};
export default Search;
