import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../script/AuthContent";


function SignupForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signup } = useAuth(); 

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); // prevent the form from submitting and reloading the signup page

        try {
            await signup(username, password, email); // call signup function from AuthContext
            setUsername("");
            setEmail("");
            setPassword("");
            navigate("/loggedIn"); // redirect to the homepage
        } catch (error) {
            console.error("Signup error:", err);
        }
    };


  return (
    <section className="form">
    <form className="form__section" onSubmit={handleSubmit}>
    <h2 className="form__title">Signup</h2>
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
    </form>

        <p className="form__switch">
            Already have an account? <Link to="/login" className="form__switch-btn" type="button">Login</Link>
        </p>
</section>
  )
}

export default SignupForm;