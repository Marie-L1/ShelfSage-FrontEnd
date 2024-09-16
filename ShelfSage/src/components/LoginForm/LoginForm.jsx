import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="login">
        <h2 className="login__title">Login</h2>
        <form className="login__form" onSubmit={handleSubmit}>
            <div className="login__username-wrapper">
                <label className="login__username-label">Username</label>
                <input
                  name="username"
                  className="login__username"
                  placeholder="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  required
                />
            </div>

            <div className="login__password-wrapper">
                <label className="login__password-label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="login__password"
                  placeholder="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
            </div>

            <button className="login__submit-btn" type="submit">Login</button>

            <p className="login__signup-btn">Don't have an account? 
              <button className="" type="button" onClick={() => onSwitch("signup")}>
              Signup
            </button>
            </p>
        </form>
    </div>
  )
}

export default LoginForm;