import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Payment = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const booking = location.state?.booking;

  const [paymentMethod, setPaymentMethod] = useState("card");

  const handlePayment = (e) => {
    e.preventDefault();

    navigate("/booking-success", {
      state: {
        booking: booking,
        paymentMethod: paymentMethod
      }
    });
  };


  return (
    <section className="payment-page py-5">

      <div className="container">

        {/* Heading */}

        <div className="text-center mb-5">

          <p className="payment-subtitle">
            GRANDSTAY HOTEL
          </p>

          <h1>
            Payment
          </h1>

          <p className="text-muted">
            Complete your booking
          </p>

        </div>


        <div className="row g-4">



          <div className="col-lg-7">

            <form
              className="payment-card"
              onSubmit={handlePayment}
            >

              <h4 className="mb-4">
                Choose Payment Method
              </h4>



              <div className="payment-option">

                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />

                <label>
                  💳 Credit / Debit Card
                </label>

              </div>


              {/* UPI */}

              <div className="payment-option">

                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />

                <label>
                  📱 UPI
                </label>

              </div>


              {/* PAY AT HOTEL */}

              <div className="payment-option">

                <input
                  type="radio"
                  name="payment"
                  value="hotel"
                  checked={paymentMethod === "hotel"}
                  onChange={(e) =>
                    setPaymentMethod(e.target.value)
                  }
                />

                <label>
                  🏨 Pay at Hotel
                </label>

              </div>


              {/* CARD DETAILS */}

              {paymentMethod === "card" && (

                <div className="mt-4">

                  <label className="form-label">
                    Card Number
                  </label>

                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter card number"
                    required
                  />


                  <div className="row">

                    <div className="col-md-6 mb-3">

                      <label className="form-label">
                        Expiry Date
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="MM/YY"
                        required
                      />

                    </div>


                    <div className="col-md-6 mb-3">

                      <label className="form-label">
                        CVV
                      </label>

                      <input
                        type="password"
                        className="form-control"
                        placeholder="CVV"
                        required
                      />

                    </div>

                  </div>

                </div>

              )}


              {/* UPI DETAILS */}

              {paymentMethod === "upi" && (

                <div className="mt-4">

                  <label className="form-label">
                    UPI ID
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="example@upi"
                    required
                  />

                </div>

              )}


              {/* PAY AT HOTEL */}

              {paymentMethod === "hotel" && (

                <div className="alert alert-info mt-4">

                  You can pay at the hotel during
                  check-in.

                </div>

              )}


              {/* PAY BUTTON */}

              <button
                type="submit"
                className="btn pay-btn w-100 mt-4"
              >
                Pay ₹4500
              </button>


              <p className="text-center text-muted mt-3">
                🔒 Secure Booking
              </p>

            </form>

          </div>


          {/* SUMMARY */}

          <div className="col-lg-5">

            <div className="payment-summary">

              <h4>
                Booking Summary
              </h4>

              <hr />

              <div className="summary-row">

                <span>
                  Room
                </span>

                <strong>
                  Deluxe Room
                </strong>

              </div>


              <div className="summary-row">

                <span>
                  Check In
                </span>

                <strong>
                  {booking?.checkIn || "--"}
                </strong>

              </div>


              <div className="summary-row">

                <span>
                  Check Out
                </span>

                <strong>
                  {booking?.checkOut || "--"}
                </strong>

              </div>


              <div className="summary-row">

                <span>
                  Room Price
                </span>

                <strong>
                  ₹4500
                </strong>

              </div>


              <hr />


              <div className="summary-total">

                <span>
                  Total
                </span>

                <strong>
                  ₹4500
                </strong>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Payment;