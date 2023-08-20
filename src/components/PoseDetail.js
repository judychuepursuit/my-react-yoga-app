import noPose from "./images/no-Pose.jpg";

import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function PoseDetail() {
  const [pose, setPose] = useState([]);
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/poses/${id}`)
      .then(response => setPose(response.data))
      .catch(() => navigate("/not-found"));
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/poses/${id}`)
      .then(() => navigate(`/poses`))
      .catch((e) => console.error(e));
  };
  
  return (
    <article className="pose-page">
      <div className="pose-detail">
        <div className="image">
          <img src={pose.image_link ? pose.image_link : noPose}/>
        </div>
        <div className="detail">
          <h2>{pose.is_favorite ? "❤️" : "♡"} {pose.name}</h2>
          <p><span>Pose Level:</span> {pose.level} ⭐️</p>
          <p><span>Sanskrit Name:</span> {pose.sanskrit}</p>
          <p><span>Instructions:</span> {pose.instructions}</p>
          <p><span>Benefits:</span> {pose.benefits}</p>
          <p><span>Official Website:</span> <a href={pose.website} target="_blank">{pose.website}</a></p>
        </div>
      </div>
      <div className="navigation">
        <div>
          {" "}
          <Link to={`/poses`}>
            <button>BACK</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/poses/${id}/edit`}>
            <button>EDIT</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>DELETE</button>
        </div>
      </div>
    </article>
  );
}

export default PoseDetail;
