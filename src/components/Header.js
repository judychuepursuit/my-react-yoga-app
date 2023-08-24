import { Link } from "react-router-dom";


export default function Header() {
  return (
    <nav>
      <h1>
        <Link to="/" className="header-link">Yoga Poses <br></br>Yoga Poses<br></br>Yoga Poses</Link>
      </h1>
    </nav>
  );
}