import axios from "axios";
import { useState, useEffect } from "react";
import PoseCard from "./PoseCard";

const API = process.env.REACT_APP_API_URL;

function AllPoses() {
  const [allPoses, setAllPoses] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/poses`)
      .then((response) => setAllPoses(response.data))
      .catch((e) => console.error("catch", e));
  }, []);


  return (
    <div className="all-poses">
      {allPoses.map(pose =>
        <PoseCard key={pose.id} pose={pose}/>
      )}
    </div>
  );
}

export default AllPoses;
