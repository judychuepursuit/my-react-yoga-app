import { Link } from "react-router-dom";
import AllPoses from "../components/AllPoses";

function Index() {
  return (
    <div className="Index">
      <div className="inner">
        <h2>Poses List</h2>
        <Link to="/poses/new" className="header-link">
          <button className="new-btn">NEW POSE</button>
        </Link>
      </div>
      <AllPoses />
    </div>
  );
}

export default Index;