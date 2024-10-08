import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../script/AuthContent";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); 
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // attempt login (ensure the 'login' function handles the API call and token)
      const isSuccess = await login(username, password);
  
      if (isSuccess) {
        // clear form fields
        setUsername("");
        setPassword("");
  
        // navigate to the loggedIn page
        navigate("/loggedIn");
      } else {
        console.error("Login failed: Incorrect username or password");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  


  return (
    <div className="form">
        <form className="form__section" onSubmit={handleSubmit}>
        <h2 className="form__title">Login</h2>
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

            <button type="submit" className="form__submit-btn">Login</button>

        </form>
            <p className="form__switch">Don't have an account? 
              <Link to="/signup" className="form__switch-btn" type="button">
              Sign Up
            </Link>
            </p>
    </div>
  )
}

export default LoginForm;