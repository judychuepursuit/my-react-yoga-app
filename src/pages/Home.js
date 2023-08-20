import { Link } from "react-router-dom";
import image from "../components/images/site icon.png";

function Home() {
  return (
    <div className="Home">
      <div>
        <h1>Welcome To Yoga Poses App</h1>
        <h3 className="All Pose Links"><Link to="/poses">{`‣ Click here for All Poses`}</Link></h3>
      </div>
      <div>
        <img src={image} alt="site icon.png"/>
      </div>
    </div>
  );
}
  
export default Home;