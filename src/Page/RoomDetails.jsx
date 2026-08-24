import React from "react";
import { Link } from "react-router-dom";
import Deluxe_Room from "../images/Deluxe_Room.jpg"
import premium_rooms from "../images/premium_rooms.jpg"
import executive_room from "../images/executive_room.jpg"
import Family_Room from "../images/Family_Room.jpg";
import Luxury_Suite from "../images/Luxury_Suite.jpg";


const RoomDetails = () => {
  return (
    <div className="room-details-page">

      <section className="room-details-hero" style={{ backgroundImage: `url(${Deluxe_Room})` }}>
        <div className="room-details-overlay text-center">
          <p>GRANDSTAY HOTEL</p>

          <h1>Deluxe King Room</h1>

          <span>Comfort • Luxury • Elegance</span>
        </div>
      </section>


      <section className="room-main-section py-5 py-lg-6">
        <div className="container">

          <div className="row align-items-center g-4 g-lg-5">

            <div className="col-lg-6">

              <div className="room-main-image">
                <img
                  src={Deluxe_Room}
                  alt="Deluxe King Room"
                  className="img-fluid w-100"
                />
              </div>

            </div>


            <div className="col-lg-6">

              <span className="room-label">
                POPULAR ROOM
              </span>

              <h2 className="room-title">
                Deluxe King Room
              </h2>

              <div className="room-rating mb-3">
                ★★★★★
                <span> 5.0</span>
              </div>

              <p className="room-main-description">
                Experience comfort and elegance in our Deluxe King Room.
                Designed with stylish interiors, premium furnishings and
                modern amenities for a relaxing stay.
              </p>


              <div className="row g-3 mb-4">

                <div className="col-6">
                  <div className="room-info-box">
                    <span>👤</span>
                    <strong>Guests</strong>
                    <p>2 Guests</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="room-info-box">
                    <span>🛏</span>
                    <strong>Bed</strong>
                    <p>1 King Bed</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="room-info-box">
                    <span>📐</span>
                    <strong>Room Size</strong>
                    <p>32 m²</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="room-info-box">
                    <span>❄️</span>
                    <strong>Air Conditioning</strong>
                    <p>Available</p>
                  </div>
                </div>

              </div>


              <div className="room-price-box">

                <div>
                  <span>Starting from</span>

                  <h3>₹7,500</h3>

                  <small>per night</small>
                </div>

                <Link
                  to="/booking"
                  className="book-room-btn"
                >
                  Book This Room
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>


      <section className="about-room-section py-5">

        <div className="container">

          <div className="section-heading text-center mb-5">

            <span>DISCOVER YOUR STAY</span>

            <h2>About This Room</h2>

            <p>
              Everything you need for a comfortable and memorable stay.
            </p>

          </div>


          <div className="row g-4 g-lg-5">

            <div className="col-lg-6">

              <div className="about-room-text">

                <h3>Designed for Comfort</h3>

                <p>
                  Our Deluxe King Room combines modern design with a warm
                  and welcoming atmosphere. Enjoy a spacious room, premium
                  bedding and thoughtful amenities throughout your stay.
                </p>

                <p>
                  Whether you are travelling for business or leisure,
                  GrandStay provides the perfect environment to relax,
                  refresh and enjoy your stay.
                </p>

              </div>

            </div>


            <div className="col-lg-6">

              <div className="room-highlights">

                <h3>Room Highlights</h3>

                <ul>

                  <li>✓ Comfortable King-size Bed</li>

                  <li>✓ Spacious 32 m² Room</li>

                  <li>✓ Modern Private Bathroom</li>

                  <li>✓ Complimentary Wi-Fi</li>

                  <li>✓ Daily Housekeeping</li>

                  <li>✓ 24-hour Room Service</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="amenities-section py-5">

        <div className="container">

          <div className="section-heading text-center mb-5">

            <span>COMFORT & CONVENIENCE</span>

            <h2>Room Amenities</h2>

            <p>
              Everything you need to make your stay comfortable.
            </p>

          </div>


          <div className="row g-4">

            <div className="col-12 col-sm-6 col-lg-4">

              <div className="amenity h-100">

                <div>🛏</div>

                <h4>King Bed</h4>

                <p>
                  Premium comfortable bedding
                </p>

              </div>

            </div>


            <div className="col-12 col-sm-6 col-lg-4">

              <div className="amenity h-100">

                <div>📶</div>

                <h4>Free Wi-Fi</h4>

                <p>
                  High-speed internet access
                </p>

              </div>

            </div>


            <div className="col-12 col-sm-6 col-lg-4">

              <div className="amenity h-100">

                <div>❄️</div>

                <h4>Air Conditioning</h4>

                <p>
                  Comfortable room temperature
                </p>

              </div>

            </div>


            <div className="col-12 col-sm-6 col-lg-4">

              <div className="amenity h-100">

                <div>📺</div>

                <h4>Smart TV</h4>

                <p>
                  Entertainment at your fingertips
                </p>

              </div>

            </div>


            <div className="col-12 col-sm-6 col-lg-4">

              <div className="amenity h-100">

                <div>🚿</div>

                <h4>Private Bathroom</h4>

                <p>
                  Modern bathroom facilities
                </p>

              </div>

            </div>


            <div className="col-12 col-sm-6 col-lg-4">

              <div className="amenity h-100">

                <div>🛎</div>

                <h4>Room Service</h4>

                <p>
                  24-hour room service
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="room-gallery-section py-5">

        <div className="container">

          <div className="section-heading text-center mb-5">

            <span>EXPLORE</span>

            <h2>Room Gallery</h2>

            <p>
              Take a closer look at your GrandStay experience.
            </p>

          </div>


          <div className="row g-3">

            <div className="col-lg-6">

              <div className="gallery-image gallery-large">

                <img
                  src={Deluxe_Room}
                  alt="Deluxe bedroom"
                  className="img-fluid w-100"
                />

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="gallery-image">

                <img
                  src={premium_rooms}
                  alt="Premium hotel room"
                  className="img-fluid w-100"
                />

              </div>

            </div>


            <div className="col-lg-3 col-md-6">

              <div className="gallery-image">

                <img
                  src={executive_room}
                  alt="Executive hotel room"
                  className="img-fluid w-100"
                />

              </div>

            </div>

            <div className="col-lg-3 col-md-6">

              <div className="gallery-image">

                <img
                  src={Luxury_Suite}
                  alt="Luxury Suite"
                  className="img-fluid w-100"
                />

              </div>

            </div>

            <div className="col-lg-3 col-md-6">

              <div className="gallery-image">

                <img
                  src={Family_Room}
                  alt="Family Room"
                  className="img-fluid w-100"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="room-policies-section py-5">

        <div className="container">

          <div className="section-heading text-center mb-5">

            <span>GOOD TO KNOW</span>

            <h2>Room Policies</h2>

          </div>


          <div className="row g-3">

            <div className="col-12 col-sm-6 col-lg-3">

              <div className="policy-box h-100">

                <strong>Check-in</strong>

                <p>2:00 PM</p>

              </div>

            </div>


            <div className="col-12 col-sm-6 col-lg-3">

              <div className="policy-box h-100">

                <strong>Check-out</strong>

                <p>11:00 AM</p>

              </div>

            </div>


            <div className="col-12 col-sm-6 col-lg-3">

              <div className="policy-box h-100">

                <strong>Maximum Guests</strong>

                <p>2 Guests</p>

              </div>

            </div>


            <div className="col-12 col-sm-6 col-lg-3">

              <div className="policy-box h-100">

                <strong>Cancellation</strong>

                <p>Free cancellation</p>

              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="room-booking-cta" style={{ backgroundImage: `url(${Deluxe_Room})` }}>

        <div className="room-cta-overlay text-center">

          <span>YOUR PERFECT STAY AWAITS</span>

          <h2>Ready to Experience GrandStay?</h2>

          <p>
            Book your Deluxe King Room and enjoy comfort,
            elegance and warm hospitality.
          </p>

          <Link
            to="/booking"
            className="cta-book-btn"
          >
            Book Your Room
          </Link>

        </div>

      </section>

    </div>
  );
};

export default RoomDetails;