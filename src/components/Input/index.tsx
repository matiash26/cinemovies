import type { IProps } from './type';
import './style.css';
export const Input = ({ placeholder, type, onChange }: IProps): JSX.Element => {
  return (
    <label htmlFor={type}>
      <input
        className="normalInput"
        type={type}
        name={type}
        id={type}
        onChange={onChange}
        required
      />
      <span>{placeholder}</span>
    </label>
  );
};
