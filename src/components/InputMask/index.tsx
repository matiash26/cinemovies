'use client';
import { Controller } from 'react-hook-form';
import { useState, type ChangeEvent } from 'react';
import { type IMask } from './type';
import './style.css';

export const InputMask = ({
  mask,
  type,
  label,
  name,
  control,
  setValue,
  isMask = false,
}: IMask): JSX.Element => {
  const [text, setText] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    if (isMask) {
      const inputText = mask(value, text);
      setValue(name, inputText, { shouldValidate: true });
      setText(inputText);
    } else {
      setValue(name, value, { shouldValidate: true });
      setText(value);
    }
  };
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <input
          {...field}
          onChange={handleChange}
          type={type}
          name={name}
          placeholder={label}
          className="inputMask"
        />
      )}
      defaultValue=""
    />
  );
};
