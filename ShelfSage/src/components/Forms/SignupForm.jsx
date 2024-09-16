import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.scss";
import { Link } from "react-router-dom";


function SignupForm({ onSwitch }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent the form from submitting and reloading the signup page

        const newUser = { username, email, password };
        console.log("form submitted")

        // update user state to log them in
        setUser(newUser);

        // clear input fields 
        setUsername("");
        setEmail("");
        setPassword("");

        // redirect to logged-in homepage
        navigate("/")
    } 

  return (
    <section className="form">
    <h2 className="form__title">Signup</h2>
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

        <div className="form__email-wrapper">
            <label className="form__email-label">Email</label>
            <input
            name="email"
            className="form__email-input"
            placeholder="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="form__password-wrapper">
            <label className="form__password-label">Password</label>
            <input
            name="password"
            className="form__password-input"
            placeholder="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <button className="form__submit-btn" type="submit">Sign Up</button>

        <p className="form__switch">
            Already have an account? <button className="form__switch-btn" type="button" onClick={() => onSwitch("login")}>Login</button>
        </p>
    </form>
</section>
  )
}

export default SignupForm;