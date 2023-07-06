import './style.css';

interface IProps {
  name?: string;
  key: number;
}
export const Tag = ({ name }: IProps): JSX.Element => {
  return <span className="tagGener">{name}</span>;
};
