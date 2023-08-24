import noPose from "./images/no-Pose.jpg";
import { Link } from "react-router-dom";

function PoseCard({ pose }) {
  return (
    <div className="pose-card">
      <div>
        <img src={pose.image_link ? pose.image_link : noPose } alt="pose"/>
      </div>
      <div>
        <h3>
          <Link to={`/poses/${pose.id}`} >{pose.is_favorite ? "❤️" : "♡"} {pose.name}</Link>
        </h3>
      </div>
    </div>
  );
}

export default PoseCard;