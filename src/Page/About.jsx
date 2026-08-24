import React from "react";
import rooms3 from "../images/rooms3.png";
import hotels from "../images/hotels.jpg";
import hotel4 from "../images/hotel4.jpg";
import lobby2 from "../images/lobby2.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      
      <div
        className="about-hero"
        style={{ backgroundImage: `url(${rooms3})` }}
      >
        <div className="container text-center">
          <h3>About GrandStay</h3>
          <p>Where Comfort Meets Elegance</p>
        </div>
      </div>

      
      <section className="about-intro py-5">
        <div className="container">
          <div className="row align-items-center">

            
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={hotels}
                alt="GrandStay Hotel"
                className="img-fluid rounded about-image"
              />
            </div>

            
            <div className="col-md-6">
              <h2 className="about-small-title">
                Welcome to GrandStay
              </h2>

              <p>A Comfortable Stay, A Memorable Experience</p>

              <p className="about-description">
                Welcome to GrandStay, where comfort, elegance, and
                warm hospitality come together. Enjoy beautifully
                designed rooms, modern facilities, and exceptional
                service for a relaxing and memorable stay.
              </p>

              <div className="about-features">
                <p>✓ Luxury Rooms</p>
                <p>✓ Exceptional Service</p>
                <p>✓ Modern Facilities</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      <section className="about-story py-5 mt-1">
        <div className="container">
          <div className="row align-items-center">

            
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={lobby2}
                alt="GrandStay Hotel Lobby"
                className="img-fluid rounded about-image"
              />
            </div>

            
            <div className="col-md-6">
              <h2 className="story-small-title">
                Our Story
              </h2>

              <p>A Home Away From Home</p>

              <p className="story-description">
                GrandStay began with a simple idea — to create a
                place where guests can feel comfortable, relaxed,
                and truly welcomed.
              </p>

              <p className="story-description">
                What started as a vision for a warm and elegant
                stay has grown into a hotel experience focused on
                comfort, quality, and genuine hospitality.
              </p>

              
              <div className="hotel-stats">

                <div className="stat-item">
                  <h3>10+</h3>
                  <p>Years of Hospitality</p>
                </div>

                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Luxury Rooms</p>
                </div>

                <div className="stat-item">
                  <h3>24/7</h3>
                  <p>Guest Service</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      
      <section className="why-choose-us py-5 mt-1">
        <div className="container">

          <div className="text-center mb-5">
            <h2>Why Choose GrandStay</h2>
            <p>
              Everything you need for a comfortable and memorable stay.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-lg-3 col-md-6">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <div className="fs-1 mb-3">🛏️</div>

                  <h5 className="card-title">
                    Comfortable Rooms
                  </h5>

                  <p className="card-text">
                    Relax in beautifully designed rooms with modern
                    amenities and a peaceful atmosphere.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <div className="fs-1 mb-3">⭐</div>

                  <h5 className="card-title">
                    Excellent Service
                  </h5>

                  <p className="card-text">
                    Our friendly team is always ready to make your
                    stay comfortable and enjoyable.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <div className="fs-1 mb-3">🍽️</div>

                  <h5 className="card-title">
                    Delicious Dining
                  </h5>

                  <p className="card-text">
                    Enjoy delicious meals and refreshing drinks
                    in a warm and welcoming atmosphere.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <div className="fs-1 mb-3">📍</div>

                  <h5 className="card-title">
                    Great Location
                  </h5>

                  <p className="card-text">
                    Stay close to popular attractions, shopping,
                    business areas, and local experiences.
                  </p>
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
    
    
    </>
  );
};

export default About;