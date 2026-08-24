import React from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "../Components/UI/Card.jsx";

import rooms1 from "../images/rooms1.jpg";
import rooms2 from "../images/rooms2.jpg";
import hotel3 from "../images/hotel3.jpg";
import restaurants from "../images/restaurants.jpg";
import lobby from "../images/lobby.jpg";
import spa from "../images/spa.png";

const Galleries = () => {

  const galleriesData = useLoaderData();

  const images = [
    rooms1,
    rooms2,
    hotel3,
    restaurants,
    lobby,
    spa
  ];

  return (
    <ul className="container grid grid-four--cols">

      {galleriesData.map((curGalleries) => (

        <Card
          key={curGalleries.id}
          curGalleries={{
            ...curGalleries,
            image: images[curGalleries.id - 1]
          }}
        />

      ))}

    </ul>
  );
};

export default Galleries;