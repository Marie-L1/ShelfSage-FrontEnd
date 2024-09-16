import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.scss";

function LoginForm({ onSubmitForm, onSwitch }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userInfo = { username, password };
    console.log("login submitted");

    onSubmitForm(userInfo);

    // clear the input fields 
    setUsername("");
    setPassword("");

    // redirect to logged-in homepage
    navigate("/");
  }


  return (
    <div className="form">
        <h2 className="form__title">Login</h2>
        <form className="form__section" onSubmit={handleSubmit}>
            <div className="form__username-wrapper">
                <label className="form__username-label">Username</label>
                <input
                  name="username"
                  className="form__username-input"
                  placeholder="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                />
            </div>

            <div className="form__password-wrapper">
                <label className="form__password-label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form__password-input"
                  placeholder="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
            </div>

            <button className="form__submit-btn" type="submit">Login</button>

            <p className="form__switch">Don't have an account? 
              <button className="form__switch-btn" type="button" onClick={() => onSwitch("signup")}>
              Sign Up
            </button>
            </p>
        </form>
    </div>
  )
}

export default LoginForm;