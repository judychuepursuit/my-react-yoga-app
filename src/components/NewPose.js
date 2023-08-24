import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewPose() {
  let navigate = useNavigate();
  const [submitError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  const addPose = (newPose) => {
    axios
      .post(`${API}/poses`, newPose)
      .then(
        (res) => {
          navigate(`/poses/${res.data.id}`);
          setError(false);
        },
        (error) => {
          console.error(error);
          setError(true);
          setErrorMessage(error);
        }
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setPose({ ...pose, [event.target.id]: event.target.value });
  };

  // const handleNumberChange = (event) => {
  //   setPose({ ...pose, [event.target.id]: Number(event.target.value) });
  // };

  const handleCheckboxChange = () => {
    setPose({ ...pose, is_favorite: !pose.is_favorite });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addPose(pose);
  };

  return (
    <div className="NewEdit">
      {submitError ? <h2>There was an error : {errorMessage.Error}</h2> : null}
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
          onChange={handleTextChange}
        />
        <label htmlFor="sanskrit">Sanskrit Name:</label>
        <input
          id="sanskrit"
          type="text"
          name="sanskrit"
          value={pose.sanskrit}
          placeholder="Sanskrit Name"
          onChange={handleTextChange}
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
        <input type="submit"  value="SUBMIT"/>
      </form>
      <Link to={`/pose`}>
        <button>BACK</button>
      </Link>
    </div>
  );
}

export default NewPose;
