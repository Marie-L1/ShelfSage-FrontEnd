import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


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
    <section className="signup">
    <h2 className="signup__title">Signup</h2>
    <form className="signup__forms" onSubmit={handleSubmit}>
        <div className="signup__username-wrapper">
            <label className="signup__username-label">Username</label>
            <input
            name="username"
            className="signup__username-input"
            placeholder="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>

        <div className="signup__email-wrapper">
            <label className="signup__email-label">Email</label>
            <input
            name="email"
            className="signup__email-input"
            placeholder="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

        </div>

        <div className="signup__password-wrapper">
            <label className="signup__password-label">Password</label>
            <input
            name="password"
            className="signup__password-input"
            placeholder="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <button className="signup__submit-btn" type="submit">Sign Up</button>

        <p className="signup__switch">
            Already have an account? <button type="button" onClick={() => onSwitch("login")}>Login</button>
        </p>
    </form>
</section>
  )
}

export default SignupForm;