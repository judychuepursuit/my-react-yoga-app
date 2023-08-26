import { Link } from "react-router-dom";
import AllPoses from "../components/AllPoses";
// import image from "../components/images/water_sky.jpeg";

function Index() {
  return (
    <div className="Index">
      <div className="Index-bg"></div>
      <div className="inner">
        <h2>Poses List</h2>
        <Link to="/poses/new" className="header-link">
          <button className="new-btn">NEW POSE</button>
        </Link>
        {/* <img src={image} alt="water_sky.jpeg"/> */}
      </div>
      <AllPoses />
    </div>
  );
}

export default Index;