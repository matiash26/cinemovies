import type { IButton } from './type';
import './style.css';
export const Button = ({
  type,
  label,
  color,
  disabled,
}: IButton): JSX.Element => {
  return (
    <button type={type} className={color} disabled={disabled}>
      {label}
    </button>
  );
};
