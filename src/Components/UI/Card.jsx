import "./Card.css";
import { NavLink } from "react-router-dom";

export const Card = ({ curGalleries }) => {

  const { title, category, image, id } = curGalleries;

  return (
    <li className="hero-container">

      <div className="main-container">

        <div className="ticket-container">

          <div className="ticket__content">

            <img
              src={image}
              alt={title}
              className="gallery-image"
            />

            <h2>{title}</h2>

            <p>Category: {category}</p>

            <NavLink
              to={`/galleries/${id}`}
              className="ticket__buy-btn"
            >
              View Image
            </NavLink>

          </div>

        </div>

      </div>

    </li>
  );
};