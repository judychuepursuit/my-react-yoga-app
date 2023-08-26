import { Link } from "react-router-dom";
import image from "../components/images/site icon.png";

function Home() {
  return (
    <div className="Home">
          <body class="home"></body>
      {/* <div className="Home-bg"></div> */}
      <div className="Content">
        <h2>Welcome to Yoga Poses App</h2>
        <h3 className="AllPoseLinks"><Link to="/poses">{`‣ Click for Poses`}</Link></h3>
      </div>
      <div className="ImageContainer">
        <img src={image} alt="site icon.png"/>
      </div>
    </div>
  );
}
  
export default Home;