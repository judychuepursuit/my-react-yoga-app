import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";    
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

function EditPose() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [pose, setPose] = useState({
    name: "",
    level: "",
    sanskrit: "",
    instructions: "",
    benefits: "",
    website: "",
    image_link: "",
    is_favorite: false,
  });

  const updatePose = (updatedPose) => {
    axios
      .put(`${API}/poses/${id}`, updatedPose)
      .then(() => {
          navigate(`/poses/${id}`);
        },
        (error) => console.error(error))
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setPose({ ...pose, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setPose({ ...pose, [event.target.id]: Number(event.target.value) });
  };

  const handleCheckboxChange = () => {
    setPose({ ...pose, is_favorite: !pose.is_favorite });
  };

  useEffect(() => {
    axios
      .get(`${API}/poses/${id}`)
      .then(
        (response) => setPose(response.data),
        (error) => navigate(`/not-found`)
      );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePose(pose, id);
  };

  return (
    <div className="NewEdit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Pose Name:</label>
        <input
          id="name"
          value={pose.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Pose"
          required
        />
        <label htmlFor="level">Pose Level:</label>
        <input
          id="level"
          name="level"
          type="text"
          value={pose.level}
          placeholder="Level"
          onChange={handleNumberChange}
        />
        <label htmlFor="sanskrit">Sanskrit Name:</label>
        <input
          id="sanskrit"
          type="text"
          name="sanskrit"
          value={pose.sanskrit}
          placeholder="Sanskrit Name"
          onChange={handleNumberChange}
        />
        <label htmlFor="instructions">Pose Instructions:</label>
        <input
          id="instructions"
          name="instructions"
          type="text"
          value={pose.instructions}
          onChange={handleTextChange}
          placeholder="Pose Instructions"
        />
        <label htmlFor="benefits">Pose Benefits:</label>
        <input
          id="benefits"
          name="benefits"
          type="text"
          value={pose.benefits}
          onChange={handleTextChange}
          placeholder="Pose Benefits"
        />
        <label htmlFor="website">Website:</label>
        <input
          id="website"
          name="website"
          type="url"
          value={pose.website}
          onChange={handleTextChange}
          placeholder="https://"
          required
        />
        <label htmlFor="image_link">Image Link:</label>
        <input
          id="image_link"
          name="image_link"
          type="url"
          value={pose.image_link}
          onChange={handleTextChange}
          placeholder="https://"
        />
        <label htmlFor="is_favorite">Is Favorite?:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={pose.is_favorite}
        />
        <br />
        <input type="submit" value="SUBMIT"/>
      </form>
      <Link to={`/apps/${id}`}>
        <button>BACK</button>
      </Link>
    </div>
  );
}

export default EditPose;
