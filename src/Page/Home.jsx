import React from "react";
import hotel1 from "../images/hotel1.jpg";
import hotel2 from "../images/hotel2.jpg";
import hotel3 from "../images/hotel3.jpg";
import hotel4 from "../images/hotel4.jpg";
import Luxury_Suite from "../images/Luxury_Suite.jpg";
import Deluxe_Room from "../images/Deluxe_Room.jpg";
import Family_Room from "../images/Family_Room.jpg";
import { NavLink } from "react-router-dom";
import rooms1 from "../images/rooms1.jpg";
import rooms2 from "../images/rooms2.jpg";
import restaurants from "../images/restaurants.jpg";
import lobby from "../images/lobby.jpg";

const Home = () => {
  return (
    <>
      <div className="container-fluid px-0">
        <div id="carouselExample" className="carousel slide">

          <div className="carousel-inner">

            <div className="carousel-item active">
              <img
                src={hotel1}
                className="d-block w-100"
                alt="Hotel"
              />

              <div className="carousel-caption">
                <h1>Welcome to GrandStay</h1>

                <p>
                  Experience comfort, luxury and excellent hospitality.
                </p>

                <NavLink
                  to="/booking"
                  className="btn btn-light"
                >
                  Book Your Stay
                </NavLink>
              </div>
            </div>

            <div className="carousel-item">
              <img
                src={hotel2}
                className="d-block w-100"
                alt="Luxury Room"
              />
            </div>

            <div className="carousel-item">
              <img
                src={hotel3}
                className="d-block w-100"
                alt="Swimming Pool"
              />
            </div>

          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            />

            <span className="visually-hidden">
              Previous
            </span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            />

            <span className="visually-hidden">
              Next
            </span>
          </button>

        </div>
      </div>


      <div className="container my-4">
        <div className="row g-3">

          <div className="col-12 col-sm-6 col-lg-2">
            <div className="booking-field">

              <label className="form-label">
                Check-in
              </label>

              <input
                type="date"
                className="form-control"
              />

            </div>
          </div>


          <div className="col-12 col-sm-6 col-lg-2">
            <div className="booking-field">

              <label className="form-label">
                Check-Out
              </label>

              <input
                type="date"
                className="form-control"
              />

            </div>
          </div>


          <div className="col-12 col-sm-6 col-lg-2">
            <div className="booking-field">

              <label className="form-label">
                Guest
              </label>

              <select className="form-select">
                <option>Guest1</option>
                <option>Guest2</option>
                <option>Guest3</option>
                <option>Guest4</option>
              </select>

            </div>
          </div>


          <div className="col-12 col-sm-6 col-lg-2">
            <div className="booking-field">

              <label className="form-label">
                Room
              </label>

              <select className="form-select">
                <option>Deluxe Room</option>
                <option>Luxury Suite</option>
                <option>Family Room</option>
              </select>

            </div>
          </div>


          <div className="col-12 col-lg-4 mt-5">
            <NavLink
              to="/rooms"
              className="check-btn btn btn-dark w-100 p-4"
            >
              Check Availability
            </NavLink>
          </div>

        </div>
      </div>


      <section className="about-section py-5">
        <div className="container">

          <div className="row align-items-center g-4">

            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <img
                src={hotel1}
                alt="GrandStay Hotel"
                className="img-fluid rounded about-image w-100"
              />
            </div>


            <div className="col-12 col-md-6">

              <h3 className="about-small-title">
                ABOUT GRANDSTAY
              </h3>

              <h4>
                A Comfortable Stay, A Memorable Experience
              </h4>

              <p className="about-description">
                Welcome to GrandStay, where comfort, elegance and
                warm hospitality come together. Enjoy beautifully
                designed rooms, modern facilities and exceptional
                service for a relaxing and memorable stay.
              </p>

              <div className="about-features">
                <p>✓ Luxury Rooms</p>
                <p>✓ Exceptional Service</p>
                <p>✓ Modern Facilities</p>
              </div>

              <NavLink
                to="/about"
                className="about-btn btn btn-dark"
              >
                Discover More
              </NavLink>

            </div>

          </div>

        </div>
      </section>


      <section className="our-rooms py-5 mt-1">
        <div className="container">

          <div className="text-center mb-5">
            <h2>Our Rooms</h2>

            <p>
              Find the perfect room for your stay
            </p>
          </div>


          <div className="row g-4">

            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow">

                <img
                  src={Deluxe_Room}
                  alt="Deluxe Room"
                  className="card-img-top img-fluid"
                />

                <div className="card-body">

                  <h5 className="card-title">
                    Deluxe Room
                  </h5>

                  <p className="card-text">
                    A comfortable and modern room designed
                    for a relaxing and peaceful stay.
                  </p>

                  <h6>
                    ₹5,000 / Night
                  </h6>

                  <NavLink
                    to="/rooms"
                    className="btn btn-dark mt-2"
                  >
                    View Room
                  </NavLink>

                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow">

                <img
                  src={Luxury_Suite}
                  alt="Luxury Suite"
                  className="card-img-top img-fluid"
                />

                <div className="card-body">

                  <h5 className="card-title">
                    Luxury Suite
                  </h5>

                  <p className="card-text">
                    An elegant and spacious suite with premium
                    amenities for a luxurious stay.
                  </p>

                  <h6>
                    ₹8,000 / Night
                  </h6>

                  <NavLink
                    to="/rooms"
                    className="btn btn-dark mt-2"
                  >
                    View Room
                  </NavLink>

                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow">

                <img
                  src={Family_Room}
                  alt="Family Room"
                  className="card-img-top img-fluid"
                />

                <div className="card-body">

                  <h5 className="card-title">
                    Family Room
                  </h5>

                  <p className="card-text">
                    A spacious room designed for families,
                    providing comfort for everyone.
                  </p>

                  <h6>
                    ₹6,000 / Night
                  </h6>

                  <NavLink
                    to="/rooms"
                    className="btn btn-dark mt-2"
                  >
                    View Room
                  </NavLink>

                </div>
              </div>
            </div>

          </div>


          <div className="text-center mt-5">
            <NavLink
              to="/rooms"
              className="btn btn-outline-dark px-4"
            >
              View All Rooms
            </NavLink>
          </div>

        </div>
      </section>
      <section className="hotel-amenities py-5">
       <div className="container">

        <div className="text-center mb-5">
         <h2>Hotel Amenities</h2>
         <p>
            Enjoy modern facilities and thoughtful amenities designed
            to make your stay comfortable and relaxing.
         </p>
        </div>

        <div className="row g-4">

         <div className="col-lg-4 col-md-6">
          <div className="card h-100 border-0 shadow-sm text-center">
            <div className="card-body p-4">
               <div className="fs-1 mb-3">🏊</div>

               <h5 className="card-title">
                Swimming Pool
               </h5>

               <p className="card-text">
                Relax and refresh yourself in our clean and
                inviting swimming pool.
               </p>
            </div>
          </div>
         </div>


         <div className="col-lg-4 col-md-6">
          <div className="card h-100 border-0 shadow-sm text-center">
            <div className="card-body p-4">
                <div className="fs-1 mb-3">🍽️</div>

                <h5 className="card-title">
                Restaurant & Dining
                </h5>

                <p className="card-text">
                Enjoy delicious meals and refreshing drinks
                in our comfortable restaurant.
                </p>
            </div>
          </div>
         </div>


         <div className="col-lg-4 col-md-6">
          <div className="card h-100 border-0 shadow-sm text-center">
            <div className="card-body p-4">
                <div className="fs-1 mb-3">📶</div>

                <h5 className="card-title">
                Free Wi-Fi
                </h5>

                <p className="card-text">
                Stay connected with complimentary high-speed
                Wi-Fi throughout the hotel.
                </p>
            </div>
          </div>
         </div>


         <div className="col-lg-4 col-md-6">
          <div className="card h-100 border-0 shadow-sm text-center">
            <div className="card-body p-4">
                <div className="fs-1 mb-3">🅿️</div>

                <h5 className="card-title">
                Free Parking
                </h5>

                <p className="card-text">
                Enjoy convenient and secure parking during
                your stay with us.
                </p>
            </div>
          </div>
         </div>


         <div className="col-lg-4 col-md-6">
          <div className="card h-100 border-0 shadow-sm text-center">
            <div className="card-body p-4">
                <div className="fs-1 mb-3">🧘</div>

                <h5 className="card-title">
                Spa & Wellness
                </h5>

                <p className="card-text">
                Relax your mind and body with our peaceful
                spa and wellness facilities.
                </p>
            </div>
          </div>
         </div>


         <div className="col-lg-4 col-md-6">
          <div className="card h-100 border-0 shadow-sm text-center">
            <div className="card-body p-4">
                <div className="fs-1 mb-3">🛎️</div>

                <h5 className="card-title">
                24/7 Room Service
                </h5>

                <p className="card-text">
                Get assistance and room service whenever you
                need it, day or night.
                </p>
            </div>
          </div>
         </div>

        </div>

       </div>
      </section>
      <section className="gallery-preview py-5">
       <div className="container">

         <div className="text-center mb-5">
            <h2>Explore GrandStay</h2>

            <p>
            Take a look at our rooms, dining and beautiful hotel interiors.
            </p>
         </div>

         <div className="row g-4">

           <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100">

               <img
                  src={rooms1}
                  alt="GrandStay Room"
                  className="card-img-top img-fluid"
               />

               <div className="card-body text-center">
                  <h5 className="card-title">
                  Luxury Rooms
                  </h5>

                  <p className="card-text">
                  Relax in our comfortable and beautifully designed rooms.
                  </p>
               </div>

            </div>
           </div>


           <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100">

               <img
                  src={rooms2}
                  alt="GrandStay Room"
                  className="card-img-top img-fluid"
               />

               <div className="card-body text-center">
                  <h5 className="card-title">
                  Elegant Interiors
                  </h5>

                  <p className="card-text">
                  Enjoy stylish interiors designed for a relaxing stay.
                  </p>
               </div>

            </div>
           </div>

           <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100">

               <img
                  src={restaurants}
                  alt="GrandStay Restaurant"
                  className="card-img-top img-fluid"
               />

               <div className="card-body text-center">
                  <h5 className="card-title">
                  Restaurant & Dining
                  </h5>

                  <p className="card-text">
                  Enjoy delicious food in our welcoming dining space.
                  </p>
               </div>

            </div>
           </div>

           <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100">

               <img
                  src={lobby}
                  alt="GrandStay Lobby"
                  className="card-img-top img-fluid"
               />

               <div className="card-body text-center">
                  <h5 className="card-title">
                  Beautiful Lobby
                  </h5>

                  <p className="card-text">
                  Step into our elegant and welcoming hotel lobby.
                  </p>
               </div>

            </div>
           </div>

         </div>


         <div className="text-center mt-5">

            <NavLink
            to="/Galleries"
            className="btn btn-dark px-4"
            >
            View Gallery
            </NavLink>

         </div>

       </div>
      </section>
      <section className="guest-reviews py-5 mt-2">
         <div className="container">
            <div className="text-center mb-5">
               <h2>What Our Guest Say</h2>
               <p>Hear from our guests about their GrandStay experience.</p>
            </div>
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm">
                     <div className="card-body text-center p-4">
                        <div className="fs-4 mb-3">
                          ⭐⭐⭐⭐⭐
                        </div>
                        <p className="card-text">
                         "Amazing hotel with wonderful hospitality.
                          The rooms were clean and very comfortable."
                        </p>
                        <h6 className="mt-4 mb-0">Rahul Sharma</h6>
                        <small className="text-muted">Guest</small>
                     </div>
                  </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm">
                     <div className="card-body text-center p-4">
                        <div className="fs-4 mb-3">
                          ⭐⭐⭐⭐
                        </div>
                        <p className="card-text">
                          "Beautiful rooms and very helpful staff.
                           I really enjoyed my stay at GrandStay."
                        </p>
                        <h6 className="mt-4 mb-0">Priya Mehta</h6>
                        <small className="text-muted">Guest</small>
                     </div>
                  </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow-sm">
                     <div className="card-body text-center p-4">
                        <div className="fs-4 mb-3">
                          ⭐⭐⭐⭐⭐
                        </div>
                        <p className="card-text">
                          "Excellent service, delicious food and
                           a peaceful atmosphere. Highly recommended."
                        </p>
                        <h6 className="mt-4 mb-0"> Amit Singh</h6>
                        <small className="text-muted">Guest</small>
                     </div>
                  </div>
              </div>
            </div>
         </div>
      </section>
      <section className="stay-cta"
       style={{ backgroundImage: `url(${hotel4})` }}
      >
        <div className="cta-overlay">
          <div className="container text-center">
            <h2>Ready for Your Stay?</h2>
            <p> Experience comfort and elegance at GrandStay Hotel.</p>

            <NavLink to="/booking" className="btn btn-black">
              Book Now
            </NavLink>
          </div>
        </div>
      </section>
      <section className="contact-section py-5">
        <div className="container">

         <div className="text-center mb-5">
          <h2>Contact Us</h2>
          <p>
            We'd love to hear from you. Get in touch with the GrandStay Hotel team.
          </p>
         </div>
         <div className="row g-4">
          <div className="col-12 col-md-5">
            <div className="contact-info h-100 p-4">
             <h4 className="mb-4">Get In Touch</h4>
             <div className="mb-4">
               <h6>📍 Location</h6>
               <p className="mb-0">
                 Jaipur, Rajasthan
               </p>
             </div>
             <div className="mb-4">
               <h6>📞 Phone</h6>
               <p className="mb-0">
                +91 89551 73579
               </p>
             </div>
             <div className="mb-4">
              <h6>✉ Email</h6>
              <p className="mb-0">
                info@grandstay.com
              </p>
             </div>
             <div>
              <h6>🕐 Available</h6>
              <p className="mb-0">
                24/7 Guest Support
               </p>
             </div>
            </div>
          </div>
          <div className="col-12 col-md-7">
           <div className="contact-form p-4 shadow-sm">
             <h4 className="mb-4">Send Us a Message</h4>
             <form>
              <div className="mb-3">
                <label className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                 Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter subject"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <div className="col-12 col-md-4 text-md-end">
                <NavLink to="/contact"
                 className="btn btn-dark px-4 py-2"
                >
                   Contact Us
                </NavLink>
              </div>
            </form>
           </div>
          </div>
         </div>
        </div>
      </section>
    </>
  );
};

export default Home;