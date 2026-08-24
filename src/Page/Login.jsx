import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();

    const user = {
      name: name,
      email: email
    };

    // Save user in localStorage
    localStorage.setItem(
      "grandstayUser",
      JSON.stringify(user)
    );

    alert("Login successful!");

    navigate("/");
  };

  return (
    <div className="login-container">

      <form
        onSubmit={handleSubmit}
        className="login-form"
      >

        <h4>
          Welcome Back!
        </h4>



        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          required
        />

        <br />



        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
          required
        />

        <br />



        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
          required
        />

        <br />



        <button
          type="submit"
          className="btn btn-dark w-100"
        >
          Login
        </button>


        {/* SIGNUP */}

        <p className="login-text">

          Don't have an account?{" "}

          <NavLink to="/signup">
            Signup
          </NavLink>

        </p>

      </form>

    </div>
  );
};

export default Login;