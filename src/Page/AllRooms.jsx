import { useParams, useNavigate, NavLink } from "react-router-dom";

import Deluxe_Room from "../images/Deluxe_Room.jpg";
import premium_rooms from "../images/premium_rooms.jpg";
import executive_room from "../images/executive_room.jpg";
import Family_Room from "../images/Family_Room.jpg";
import Luxury_Suite from "../images/Luxury_Suite.jpg";



const AllRooms = () => {

  const navigate = useNavigate();

  const { id } = useParams();


  const rooms = [
    {
      id: 1,
      name: "Deluxe King Room",
      image: Deluxe_Room,
      price: 7500,
      guests: "2 Guests",
      bed: "1 King Bed",
      size: "32 m²",
    },

    {
      id: 2,
      name: "Premium Double Room",
      image: premium_rooms,
      price: 8500,
      guests: "2 Guests",
      bed: "2 Double Beds",
      size: "38 m²",
    },{
      id: 3,
      name: "Executive Suite",
      image: executive_room,
      price: 10000,
      guests: "3 Guests",
      bed: "1 King Bed",
      size: "45 m²",
    },{
      id: 4,
      name: "Family  Room",
      image: Family_Room,
      price: 6500,
      guests: "2 Guests",
      bed: "2 King Bed",
      size: "32 m²",
    }, {
      id: 5,
      name: "Luxury Suite",
      image: Luxury_Suite,
      price: 9000,
      guests: "3 Guests",
      bed: "2 Double Beds",
      size: "38 m²",
    }
  ];


  const room = rooms[id - 1];


  return (

    <div className="all-rooms-page">

      <div className="container py-5">

        <h1>
          {room.name}
        </h1>

        <img
          src={room.image}
          alt={room.name}
          className="img-fluid"
        />

        <p>
          Guests: {room.guests}
        </p>

        <p>
          Bed: {room.bed}
        </p>

        <p>
          Room Size: {room.size}
        </p>

        <h3>
          ₹{room.price.toLocaleString()} / night
        </h3>


        <button
          onClick={() => navigate("/rooms")}
          className="btn btn-dark"
        >
          Go Back
        </button>
        <NavLink to="/Booking" className="book-btn ms-2">
            Book Now
        </NavLink>

      </div>

    </div>

  );
};


export default AllRooms;