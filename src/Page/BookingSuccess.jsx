import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingSuccess = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state?.booking;
  const paymentMethod = location.state?.paymentMethod;


  // If booking data is missing
  if (!booking) {
    return (
      <div className="container text-center py-5">

        <h3>
          Booking information not found
        </h3>

        <p className="text-muted">
          Please complete the booking first.
        </p>

        <button
          className="btn btn-dark mt-3"
          onClick={() => navigate("/booking")}
        >
          Go to Booking
        </button>

      </div>
    );
  }


  return (
    <section className="success-page py-5">

      <div className="container">

        <div className="success-card text-center">


          {/* SUCCESS ICON */}

          <div className="success-icon">
            ✓
          </div>


          {/* HEADING */}

          <p className="success-subtitle">
            GRANDSTAY HOTEL
          </p>

          <h1>
            Booking Successful!
          </h1>

          <p className="success-message">
            Thank you, {booking.firstName || "Guest"}!
            <br />
            Your stay at GrandStay Hotel has been confirmed.
          </p>


          {/* BOOKING DETAILS */}

          <div className="booking-details text-start">

            <h4>
              Booking Details
            </h4>


            {/* BOOKING ID */}

            <div className="detail-row">

              <span>
                Booking ID
              </span>

              <strong>
                GS{Date.now().toString().slice(-6)}
              </strong>

            </div>


            {/* GUEST */}

            <div className="detail-row">

              <span>
                Guest
              </span>

              <strong>
                {booking.firstName} {booking.lastName}
              </strong>

            </div>


            {/* ROOM */}

            <div className="detail-row">

              <span>
                Room
              </span>

              <strong>
                {booking.roomName}
              </strong>

            </div>


            {/* CHECK IN */}

            <div className="detail-row">

              <span>
                Check In
              </span>

              <strong>
                {booking.checkIn}
              </strong>

            </div>


            {/* CHECK OUT */}

            <div className="detail-row">

              <span>
                Check Out
              </span>

              <strong>
                {booking.checkOut}
              </strong>

            </div>


            {/* PAYMENT */}

            <div className="detail-row">

              <span>
                Payment Method
              </span>

              <strong>
                {paymentMethod}
              </strong>

            </div>


            {/* EMAIL */}

            <div className="detail-row">

              <span>
                Email
              </span>

              <strong>
                {booking.email}
              </strong>

            </div>


            <hr />


            {/* TOTAL */}

            <div className="detail-row total">

              <span>
                Total
              </span>

              <strong>
                ₹{booking.total}
              </strong>

            </div>

          </div>


          {/* EMAIL MESSAGE */}

          <div className="email-message">

            📧

            <span>
              Booking confirmation will be sent to
              <strong> {booking.email}</strong>
            </span>

          </div>

          <button
            className="btn home-btn"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>

        </div>

      </div>

    </section>
  );
};

export default BookingSuccess;