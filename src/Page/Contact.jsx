import React, { useState } from "react";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thank you! Your message has been sent.");

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section className="contact-section py-5">

      <div className="container">

        {/* Heading */}

        <div className="text-center mb-5">

          <h2>
            Contact Us
          </h2>

          <p>
            We'd love to hear from you.
            Get in touch with the GrandStay Hotel team.
          </p>

        </div>


        <div className="row g-4">


          <div className="col-12 col-md-5">

            <div className="contact-info h-100 p-4">

              <h4 className="mb-4">
                Get In Touch
              </h4>


              <div className="mb-4">

                <h6>
                  📍 Location
                </h6>

                <p className="mb-0">
                  Jaipur, Rajasthan
                </p>

              </div>


              <div className="mb-4">

                <h6>
                  📞 Phone
                </h6>

                <p className="mb-0">
                  +91 89551 73579
                </p>

              </div>


              <div className="mb-4">

                <h6>
                  ✉ Email
                </h6>

                <p className="mb-0">
                  info@grandstay.com
                </p>

              </div>


              <div>

                <h6>
                  🕐 Available
                </h6>

                <p className="mb-0">
                  24/7 Guest Support
                </p>

              </div>

            </div>

          </div>


          <div className="col-12 col-md-7">

            <div className="contact-form p-4 shadow-sm">

              <h4 className="mb-4">
                Send Us a Message
              </h4>


              <form onSubmit={handleSubmit}>

                <div className="mb-3">

                  <label className="form-label">
                    Your Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    required
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
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    required
                  />

                </div>



                {/* SUBJECT */}

                <div className="mb-3">

                  <label className="form-label">
                    Subject
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter subject"
                    value={subject}
                    onChange={(event) =>
                      setSubject(event.target.value)
                    }
                    required
                  />

                </div>



                {/* MESSAGE */}

                <div className="mb-3">

                  <label className="form-label">
                    Your Message
                  </label>

                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write your message"
                    value={message}
                    onChange={(event) =>
                      setMessage(event.target.value)
                    }
                    required
                  ></textarea>

                </div>




                <div className="text-end">

                  <button
                    type="submit"
                    className="btn btn-dark px-4 py-2"
                  >
                    Send Message
                  </button>

                </div>


              </form>

            </div>

          </div>


        </div>

      </div>

    </section>
  );
};

export default Contact;