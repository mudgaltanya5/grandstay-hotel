import React, { useState } from "react";
import Deluxe_Room from "../images/Deluxe_Room.jpg";
import { useNavigate } from "react-router-dom";

const Booking = () => {

  const navigate = useNavigate();  

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleBooking = (e) => {
   e.preventDefault();

   navigate("/payment", {
    state: {
      booking: {
        roomName: "Deluxe Room",
        roomImage: Deluxe_Room,
        checkIn: checkIn,
        checkOut: checkOut,
        total: 4500
      }
    }
  });
};

  return (
    <section className="booking-page py-5">

      <div className="container">


        <div className="text-center mb-5">

          <p className="booking-subtitle">
            GRANDSTAY HOTEL
          </p>

          <h1>
            Book Your Stay
          </h1>

          <p className="text-muted">
            Experience comfort and luxury at GrandStay.
          </p>

        </div>


        <div className="row g-4">


          <div className="col-lg-7">

            <form
              className="booking-card"
              onSubmit={handleBooking}
            >

              <h4 className="mb-4">
                Your Stay
              </h4>

              <div className="row">


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Check In
                  </label>

                  <input
                    type="date"
                    className="form-control"
                    value={checkIn}
                    onChange={(e) =>
                      setCheckIn(e.target.value)
                    }
                    required
                  />

                </div>



                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Check Out
                  </label>

                  <input
                    type="date"
                    className="form-control"
                    value={checkOut}
                    onChange={(e) =>
                      setCheckOut(e.target.value)
                    }
                    required
                  />

                </div>



                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Adults
                  </label>

                  <select className="form-select">

                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>4 Adults</option>

                  </select>

                </div>



                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Children
                  </label>

                  <select className="form-select">

                    <option>No Children</option>
                    <option>1 Child</option>
                    <option>2 Children</option>
                    <option>3 Children</option>

                  </select>

                </div>

              </div>


              <hr className="my-4" />



              <h4 className="mb-4">
                Guest Information
              </h4>

              <div className="row">

                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    First Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter first name"
                    required
                  />

                </div>


                <div className="col-md-6 mb-3">

                  <label className="form-label">
                    Last Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter last name"
                    required
                  />

                </div>


                <div className="col-12 mb-3">

                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    required
                  />

                </div>


                <div className="col-12 mb-3">

                  <label className="form-label">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter phone number"
                    required
                  />

                </div>


                <div className="col-12 mb-3">

                  <label className="form-label">
                    Special Request
                  </label>

                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Any special request?"
                  ></textarea>

                </div>

              </div>


              <button
                type="submit"
                className="btn booking-btn w-100 mt-3"
              >
                Confirm Booking
              </button>

            </form>

          </div>



          <div className="col-lg-5">

            <div className="booking-summary">

              <h4>
                Booking Summary
              </h4>

              <img
                src={Deluxe_Room}
                alt="Deluxe Room"
                className="summary-image"
              />

              <h3>
                Deluxe Room
              </h3>

              <p>
                Comfortable room with modern
                facilities and beautiful views.
              </p>

              <hr />

              <div className="summary-item">

                <span>Check In</span>

                <strong>
                  {checkIn || "--"}
                </strong>

              </div>


              <div className="summary-item">

                <span>Check Out</span>

                <strong>
                  {checkOut || "--"}
                </strong>

              </div>


              <div className="summary-item">

                <span>Guests</span>

                <strong>
                  2 Adults
                </strong>

              </div>


              <hr />

              <div className="summary-item">

                <span>Room Price</span>

                <strong>
                  ₹4,500 / night
                </strong>

              </div>


              <div className="summary-item total">

                <span>Total</span>

                <strong>
                  ₹4,500
                </strong>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Booking;