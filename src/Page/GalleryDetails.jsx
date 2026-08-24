import { useParams, useNavigate } from "react-router-dom";

import rooms1 from "../images/rooms1.jpg";
import rooms2 from "../images/rooms2.jpg";
import hotel3 from "../images/hotel3.jpg";
import restaurants from "../images/restaurants.jpg";
import lobby from "../images/lobby.jpg";
import spa from "../images/spa.png";

const GalleryDetails = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const images = [
    rooms1,
    rooms2,
    hotel3,
    restaurants,
    lobby,
    spa
  ];

  const galleryImage = images[Number(id) - 1];

  return (
    <div className="gallery-details">

      <h1>Gallery Details</h1>

      <img
        src={galleryImage}
        alt="Gallery"
        className="gallery-details-image"
      />

      <button
        onClick={() => navigate("/Galleries")}
        className="btn-2"
      >
        Go Back
      </button>

    </div>
  );
};

export default GalleryDetails;