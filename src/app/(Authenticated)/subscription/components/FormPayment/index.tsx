'use client';
import { useContext } from 'react';
import { type ISubmit } from './type';
import { useRouter } from 'next/navigation';

import { InputMask } from '@/components/InputMask';
import { Button } from '@/components/button';
import { FieldPosition } from '../FieldPosition';

import creditCardMask from '@/functions/creditCardMask';
import phoneMask from '@/functions/phoneMask';

import { signature } from '@/utils/signature';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import cookies from 'js-cookie';
import { UserContext } from '@/context/userContext';
import * as yup from 'yup';

import './style.css';
const schema = yup
  .object({
    firstName: yup.string().required(),
    middleName: yup.string().required(),
    phone: yup.string().required(),
    creditCard: yup.string().required(),
    cvCreditCard: yup.string().required(),
    expiryMonth: yup.string().required(),
    expiryYear: yup.string().required(),
  })
  .required();

function FormPayment(): JSX.Element {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const {
    handleSubmit,
    control,
    setValue,
    formState: { isValid },
  } = useForm<ISubmit>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<ISubmit> = async (data): Promise<void> => {
    try {
      const token = cookies.get('token') as string;
      const response = await signature(token, data);
      cookies.set('token', response.token);
      setUser({ subs: response.subs });
      if (response.subs) {
        router.push('/');
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="subscriptionForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="formContent">
        <div className="formLeft">
          <h2 className="formTitle">dados pessoais</h2>
          <div className="fullName">
            <FieldPosition label="nome" side={false}>
              <InputMask
                type="text"
                mask={creditCardMask}
                label="Nome"
                name="firstName"
                control={control}
                setValue={setValue}
              />
            </FieldPosition>
            <FieldPosition label="sobrenome" side={false}>
              <InputMask
                type="text"
                mask={creditCardMask}
                label="Sobrenome"
                name="middleName"
                control={control}
                setValue={setValue}
              />
            </FieldPosition>
          </div>
          <FieldPosition label="numero de telefone" side={false}>
            <InputMask
              type="text"
              mask={phoneMask}
              label="(00) 00000-0000 "
              name="phone"
              isMask={true}
              control={control}
              setValue={setValue}
            />
          </FieldPosition>
          <FieldPosition label="numero do cartão" side={false}>
            <InputMask
              type="text"
              mask={creditCardMask}
              label="0000 0000 0000 0000"
              name="creditCard"
              isMask={true}
              control={control}
              setValue={setValue}
            />
          </FieldPosition>

          <FieldPosition label="cv do cartão" side={true}>
            <InputMask
              type="text"
              label="000"
              name="cvCreditCard"
              control={control}
              setValue={setValue}
            />
          </FieldPosition>

          <FieldPosition label="data de Expiração" side={true}>
            <>
              <InputMask
                type="text"
                label="00"
                name="expiryMonth"
                control={control}
                setValue={setValue}
              />
              <span>/</span>
              <InputMask
                type="text"
                label="00"
                name="expiryYear"
                control={control}
                setValue={setValue}
              />
            </>
          </FieldPosition>
        </div>
        <div className="formRight">
          <h2 className="formTitle">detalhe do pedido</h2>
          <div className="desc">
            <h3>descrição</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              iure aspernatur sed, officiis optio labore possimus quos
              doloremque facere ullam quod quis voluptatibus veritatis eaque
              reiciendis provident? Ducimus, inventore magnam.
            </p>
          </div>
          <div className="formRightContent">
            <div>
              <span>compania</span>
              <span>cinemovies</span>
            </div>
            <div>
              <span>numero do pedido</span>
              <span>1234567</span>
            </div>
            <div>
              <span>pedido</span>
              <span>assinatura</span>
            </div>
          </div>
          <div className="pay">
            <h2>valor total</h2>
            <p>R$: 25 reais</p>
          </div>
        </div>
      </div>
      {user?.subs === true ? (
        <Button
          type="submit"
          label="cancelar assinatura"
          color="red"
          disabled={!isValid}
        />
      ) : (
        <Button type="submit" label="confimar pagamento" disabled={!isValid} />
      )}
    </form>
  );
}
export default FormPayment;
