
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white mt-5">
        <div className="container py-5 text-center border-bottom border-secondary">
           <h1>Ready for a Confortable Stay.</h1>

           <p className="text-secondary">
             Book your room at GrandStay hotel 
           </p>
           <NavLink to="/booking" className="btn btn-light px-4">
              Book Now
           </NavLink>
        </div>
        <div className="container">

         <div className="row">
          <div className="col-lg-3 col-md-6 mt-2">

            <h4 className="fw-bold">
              🏨 GrandStay
            </h4>

            <p className="text-secondary mt-3">
              Experience comfort, luxury and excellent
              hospitality at GrandStay Hotel.
            </p>

          </div>    
          <div className="col-lg-3 col-md-6 mt-2">

            <h5 className="fw-bold mb-3">
              Quick Links
            </h5>

            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/rooms">
                    Rooms
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/booking">
                     Booking
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/galleries">
                    Gallery
                  </NavLink>
                </li>
                <li className="nav-item">
                 <NavLink className="nav-link" to="/contact">
                   Contact
                 </NavLink>
                </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mt-2">

            <h5 className="fw-bold mb-3">
              Our Services
            </h5>

            <ul className="list-unstyled text-secondary">

              <li className="mb-2">Luxury Rooms</li>
              <li className="mb-2">Restaurant</li>
              <li className="mb-2">Swimming Pool</li>
              <li className="mb-2">Free WiFi</li>
              <li className="mb-2">Room Service</li>
              <li>Free Parking</li>

            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mt-2">
             <h5 className="fw-bold mb-3">
                 Contact Us
             </h5>
             <p className="text-secondary mb-2">
                📍 Jaipur, Rajasthan
             </p>
             <p className="text-secondary mb-2">
                 📞 +91 89551 73579
             </p>
             <p className="text-secondary mb-2">
                 ✉ mudgaltanya5@gmail.com
             </p>
             <p className="text-secondary">
               🕐 Open 24 Hours
             </p>
           </div>
          </div>
        </div>
        <div className="border-top border-secondary">
          <div className="container py-3">
             <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start">
                  <p className="text-secondary mb-0">
                     © 2026 GrandStay Hotel. All Rights Reserved.
                  </p>
                </div>
                <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
                  <span className="text-secondary me-3">
                    Privacy Policy
                  </span>
                  <span className="text-secondary">
                     Terms & Conditions
                  </span>
                </div>
             </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;