import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmpassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center" }}>

      <form onSubmit={handleSubmit}>

        <h4>Create Account</h4>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          name="name"
          required
        />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          required
        />
        <br />

        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          name="phone"
          required
        />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          name="password"
          required
        />
        <br />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          name="confirmPassword"
          required
        />
        <br />

        <button
          type="submit"
          className="btn btn-dark w-100"
        >
          Create Account
        </button>

        <p className="login-text">
          Already have an account?

          <NavLink to="/login">
            Login
          </NavLink>
        </p>

      </form>

    </div>
  );
};

export default Signup;