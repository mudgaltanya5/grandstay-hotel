import React, { useState } from "react";
import deluxeRoom from "../images/Deluxe_Room.jpg";
import premiumRoom from "../images/premium_rooms.jpg";
import executiveRoom from "../images/executive_room.jpg";
import Family_Room from "../images/Family_Room.jpg";
import Luxury_Suite from "../images/Luxury_Suite.jpg";
import rooms4 from "../images/rooms4.jpg";
import { NavLink } from "react-router-dom";

const Rooms = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const [showRooms, setShowRooms] = useState(false);

  const rooms = [
    {
      id: 1,
      name: "Deluxe King Room",
      image: deluxeRoom,
      guests: 2,
      bed: "1 King Bed",
      size: "32 m²",
      price: 7500,
      badge: "Popular",
      description:
        "Elegant room with a comfortable king-size bed, modern interiors and premium amenities.",
    },
    {
      id: 2,
      name: "Premium Double Room",
      image: premiumRoom,
      guests: 2,
      bed: "2 Double Beds",
      size: "38 m²",
      price: 8500,
      badge: "Best Value",
      description:
        "Spacious and stylish room perfect for couples, friends and small families.",
    },
    {
      id: 3,
      name: "Executive Suite",
      image: executiveRoom,
      guests: 3,
      bed: "1 King Bed",
      size: "45 m²",
      price: 10000,
      badge: "Luxury",
      description:
        "A luxurious suite with extra space, elegant interiors and premium facilities.",
    },{
      
      id: 4,
      name: "Luxury Suite",
      image: Luxury_Suite,
      guests: 3,
      bed: "1 King Bed",
      size: "50 m²",
      price: 12000,
      badge: "Luxury",
      description:
       "An elegant luxury suite with spacious interiors, stylish furnishings and premium facilities.",
    },{
      id: 5,
      name: "Family Room",
      image: Family_Room,
      guests: 4,
      bed: "1 King Bed + 2 Single Beds",
      size: "55 m²",
      price: 11000,
      badge: "Family",
      description:
    "A spacious family room designed for a comfortable stay with extra space, cozy interiors and family-friendly facilities.",

    }
    
  ];

  const checkAvailability = (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut || !guests) {
      alert("Please select check-in, check-out and guests.");
      return;
    }

    if (checkOut <= checkIn) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    setShowRooms(true);
  };

  const availableRooms = rooms.filter(
    (room) => room.guests >= Number(guests)
  );

  return (
    <div className="rooms-page">


      <section className="rooms-hero" style={{ backgroundImage: `url(${rooms4})` }}>

        <div className="container text-center">

          <span className="hero-small-text">
            GRANDSTAY HOTEL
          </span>

          <h1>Our Rooms</h1>

          <p>
            Discover elegant rooms and luxurious suites
            designed for a comfortable and memorable stay.
          </p>

        </div>

      </section>



      <section className="availability-wrapper ">

        <div className="container">

          <form
            className="availability-box"
            onSubmit={checkAvailability}
          >


            <div className="booking-field">

              <label htmlFor="checkIn">
                Check In
              </label>

              <input
                id="checkIn"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />

            </div>



            <div className="booking-field">

              <label htmlFor="checkOut">
                Check Out
              </label>

              <input
                id="checkOut"
                type="date"
                min={checkIn}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />

            </div>



            <div className="booking-field">

              <label htmlFor="guests">
                Guests
              </label>

              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >

                <option value="">
                  Select Guests
                </option>

                <option value="1">
                  1 Guest
                </option>

                <option value="2">
                  2 Guests
                </option>

                <option value="3">
                  3 Guests
                </option>

                <option value="4">
                  4 Guests
                </option>

              </select>

            </div>



            <button
              type="submit"
              className="availability-btn mt-4"
            >
              Check Availability
            </button>

          </form>

        </div>

      </section>



      {showRooms && (

        <section className="rooms-section">

          <div className="container">

            <div className="section-heading text-center">

              <span>
                STAY WITH US
              </span>

              <h2>
                Available Rooms
              </h2>

              <p>
                Choose the perfect room for your stay at GrandStay.
              </p>

            </div>



            <div className="selected-stay">

              <div>
                <small>CHECK IN</small>
                <strong>{checkIn}</strong>
              </div>

              <div>
                <small>CHECK OUT</small>
                <strong>{checkOut}</strong>
              </div>

              <div>
                <small>GUESTS</small>
                <strong>
                  {guests}{" "}
                  {Number(guests) === 1 ? "Guest" : "Guests"}
                </strong>
              </div>

            </div>



            <div className="row g-4">

              {availableRooms.length > 0 ? (

                availableRooms.map((room) => (

                  <div
                    className="col-lg-4 col-md-6"
                    key={room.id}
                  >

                    <div className="room-card">


                      <div className="room-image">

                        <img
                          src={room.image}
                          alt={room.name}
                        />

                        <span className="room-badge">
                          {room.badge}
                        </span>

                      </div>



                      <div className="room-content">

                        <div className="room-title">

                          <h3>
                            {room.name}
                          </h3>

                          <span className="rating">
                            ★★★★★
                          </span>

                        </div>


                        <p className="room-description">
                          {room.description}
                        </p>



                        <div className="room-details">

                          <span>
                            👤 {room.guests} Guests
                          </span>

                          <span>
                            🛏 {room.bed}
                          </span>

                          <span>
                            📐 {room.size}
                          </span>

                        </div>



                        <div className="room-bottom">

                          <div className="room-price">

                            <strong>
                              ₹{room.price.toLocaleString()}
                            </strong>

                            <small>
                              / night
                            </small>

                          </div>

                          <div className="room-buttons">
                            <NavLink
                               to="/RoomDetails"
                               className="book-btn"
                            >
                               View Details
                            </NavLink>
                            <NavLink
                               to={`/rooms/${room.id}`}
                               className="all-rooms-btn"
                            >
                               All Rooms
                            </NavLink>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                ))

              ) : (

                <div className="col-12">

                  <div className="no-room">

                    <div className="no-room-icon">
                      🏨
                    </div>

                    <h3>
                      No Rooms Available
                    </h3>

                    <p>
                      Sorry, we don't have a room available
                      for {guests} guests.
                    </p>

                  </div>

                </div>

              )}

            </div>

          </div>

        </section>

      )}

      


      <section className="benefits-section">

        <div className="container">

          <div className="section-heading text-center">

            <span>
              WHY GRANDSTAY
            </span>

            <h2>
              Stay With Confidence
            </h2>

            <p>
              Everything you need for a relaxing and memorable stay.
            </p>

          </div>


          <div className="row g-4">


            <div className="col-lg-3 col-md-6">

              <div className="benefit-card">

                <div className="benefit-icon">
                  ✦
                </div>

                <h4>
                  Best Price
                </h4>

                <p>
                  Enjoy excellent rooms at the best
                  available prices.
                </p>

              </div>

            </div>



            <div className="col-lg-3 col-md-6">

              <div className="benefit-card">

                <div className="benefit-icon">
                  WiFi
                </div>

                <h4>
                  Free Wi-Fi
                </h4>

                <p>
                  Stay connected with complimentary
                  high-speed Wi-Fi.
                </p>

              </div>

            </div>



            <div className="col-lg-3 col-md-6">

              <div className="benefit-card">

                <div className="benefit-icon">
                  ☕
                </div>

                <h4>
                  Breakfast
                </h4>

                <p>
                  Start your morning with a delicious
                  breakfast.
                </p>

              </div>

            </div>



            <div className="col-lg-3 col-md-6">

              <div className="benefit-card">

                <div className="benefit-icon">
                  ♢
                </div>

                <h4>
                  24/7 Service
                </h4>

                <p>
                  Our friendly team is available
                  around the clock.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>




      <section className="rooms-cta">

        <div className="container text-center">

          <span>
            GRANDSTAY EXPERIENCE
          </span>

          <h2>
            Your Perfect Stay Awaits
          </h2>

          <p>
            Experience comfort, elegance and exceptional
            hospitality at GrandStay Hotel.
          </p>

          <button type="button">
            Book Your Stay
          </button>

        </div>

      </section>

    </div>
  );
};

export default Rooms;