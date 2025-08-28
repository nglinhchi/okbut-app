import { Link } from "react-router-dom";

export default function Logo(props: { className?: string }) {
  const { className } = props;
  return (
    <div className={`logo text-sm text-black ${className}`}>
      <Link to="/">OKBUT.io</Link>
    </div>
  );
}
