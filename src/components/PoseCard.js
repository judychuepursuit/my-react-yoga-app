// import noPose from "./images/no-Pose.jpg";
import noImage from "./images/no-image.png";
import { Link } from "react-router-dom";

function PoseCard({ pose }) {
  return (
    <div className="pose-card">
      <div>
        <img src={pose.image_link ? pose.image_link : noImage } alt="pose"/>
      </div>
      <div>
        <h4>
          <Link to={`/poses/${pose.id}`} >{pose.is_favorite ? "❤️" : "♡"} {pose.name}</Link>
        </h4>
      </div>
    </div>
  );
}

export default PoseCard;