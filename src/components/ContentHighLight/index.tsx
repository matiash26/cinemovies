import './style.css';
import Link from 'next/link';
const ContentHighLight = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}): JSX.Element => {
  return (
    <div className="contentHighLight">
      <h1>
        {title} <Link href="#">extender</Link>
      </h1>
      <div className="contentMoviePage">{children}</div>
    </div>
  );
};
export default ContentHighLight;
