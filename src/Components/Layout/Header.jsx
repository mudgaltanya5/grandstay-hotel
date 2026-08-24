import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("grandstayUser");

    return savedUser ? JSON.parse(savedUser) : null;
  });


  const handleLogout = () => {

    localStorage.removeItem("grandstayUser");

    setUser(null);

    alert("You have been logged out.");

    navigate("/");
  };


  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">

      <div className="container">

        <NavLink className="navbar-brand fw-bold" to="/">
          🏨 GrandStay
        </NavLink>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#hotelNavbar"
          aria-controls="hotelNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div
          className="collapse navbar-collapse"
          id="hotelNavbar"
        >

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


            <li className="nav-item room-dropdown">

              <NavLink
                className="nav-link"
                to="/rooms"
              >
                Rooms
              </NavLink>

              <div className="dropdown">

                <NavLink
                  to="/RoomDetails"
                  className="dropdown-link"
                >
                  Room Details
                </NavLink>

              </div>

            </li>


            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/booking"
              >
                Booking
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/galleries"
              >
                Gallery
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>


            <li className="nav-item d-flex align-items-center">

              {!user ? (

                <>
                  <NavLink
                    to="/Login"
                    className="btn btn-dark"
                  >
                    Login
                  </NavLink>

                  <NavLink
                    to="/Signup"
                    className="btn btn-dark mx-2"
                  >
                    Signup
                  </NavLink>
                </>

              ) : (

                <div className="profile-dropdown">

                  <button className="profile-btn">
                    👤 {user.name || "My Account"}
                  </button>

                  <div className="profile-menu">

                    <NavLink to="/account">
                      👤 Account
                    </NavLink>

                    <NavLink to="/profile">
                      📋 My Profile
                    </NavLink>

                    <NavLink to="/my-trips">
                      🧳 My Trips
                    </NavLink>

                    <button
                      onClick={handleLogout}
                      className="logout-btn"
                    >
                      🚪 Logout
                    </button>

                  </div>

                </div>

              )}

            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
};

export default Header;