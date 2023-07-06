import { type IField } from './type';
import './style.css';
export const FieldPosition = ({
  children,
  label,
  side,
}: IField): JSX.Element => {
  return (
    <>
      {side ? (
        <div className="labelSide">
          <h3 className="formText">{label}</h3>
          <div className="smallContent">{children}</div>
        </div>
      ) : (
        <div className="labelAbove">
          <h3>{label}</h3>
          {children}
        </div>
      )}
    </>
  );
};
