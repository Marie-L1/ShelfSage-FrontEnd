import React from "react";
import { useAuth } from "../../script/AuthContent.jsx";
import "./Header.scss";
import logo from "../../assets/images/SHELFSAGE-green.png";
import { Link } from "react-router-dom";

function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="shelfsage logo"></img>
      {user ? (
        <div className="header-logged-in">
          <div className="header-logged-in__wrapper">
            <span className="header-logged-in__welcome">Welcome, {user.username}</span>
            <button className="header-logged-in__logout" onClick={logout}>
              Logout
            </button>
          </div>
          <nav className="header-logged-in__nav">
            <Link
              to={`/loggedIn`}
              className="header-logged-in__nav-home"
            >
              Home
            </Link>
            <Link to={`/shelf`} className="header-logged-in__nav-shelf">
              Shelf
            </Link>
            <Link
              to={`/recommendations`}
              className="header-logged-in__nav-recs"
            >
              Recommendations
            </Link>
            <Link
              to={`/profile`}
              className="header-logged-in__nav-profile"
            >
              Tracker
            </Link>
          </nav>
        </div>
      ) : (
        <div className="header-logged-out">
          <Link to={`/login`} className="header-logged-out__login">
            Login
          </Link>
          <Link to={`/signup`} className="header-logged-out__signup">
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
