import React from "react";
import { useAuth } from "../../script/AuthContent.jsx";
import "./Header.scss"
import logo from "../../assets/images/SHELFSAGE.png";
import { Link } from "react-router-dom";


function Header() {
    const { user } = useAuth();

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="shelfsage logo"></img>
      { user ? (
        <div className="header-logged-in">
            <div className="header-logged-in__wrapper">
                <span className="">Welcome, {user.username}</span>
                <button className="" onClick={() => {}}>Logout</button>
            </div>
            <nav className="header-logged-in__nav">
                <Link to={`/`} className="header-logged-in__nav-home" href="">Home </Link>
                <Link to={`/shelf`} className="header-logged-in__nav-shelf" href="">Shelf</Link>
                <Link to={`/recommendations`} className="header-logged-in__nav-recs" href="">Recommendations</Link>
                <Link to={`/profile`} className="header-logged-in__nav-profile" href="">Profile</Link>
            </nav>
        </div>
      ) : (
        <div className="header-logged-out">
            <Link to={`/login`} className="header-logged-out__login">Login</Link>
            <Link to={`/signup`} className="header-logged-out__signup">Signup</Link>
        </div>
      )}
    </header>
  );
};

export default Header;