import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <h1>
        <Link to="/" className="header-link">My Yoga Poses App</Link>
      </h1>
    </nav>
  );
}