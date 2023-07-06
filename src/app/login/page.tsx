'use client';
import { type FormEvent, useState } from 'react';
import type { IForm } from './type';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/button';
import { Input } from '@/components/Input';

import { auth } from '@/utils/auth';
import cookie from 'js-cookie';
import './style.css';

const formInit = {
  'e-mail': '',
  password: '',
};

function Login(): JSX.Element {
  const [form, setForm] = useState<IForm>(formInit);
  const router = useRouter();

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    try {
      const response = await auth(form);
      if (response !== undefined) {
        cookie.set('token', response.token);
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFields = ({ target }: FormEvent<HTMLFormElement>): void => {
    const { name, value } = target as HTMLInputElement;
    setForm((state) => ({ ...state, [name]: value }));
  };
  return (
    <main className="loginContainer">
      <form onSubmit={handleSubmit} className="loginForm">
        <h1>login</h1>
        <Input type="e-mail" onChange={handleFields} placeholder="E-mail" />
        <Input type="password" onChange={handleFields} placeholder="Senha" />
        <Button type="submit" label="Entrar" />
      </form>
    </main>
  );
}
export default Login;
