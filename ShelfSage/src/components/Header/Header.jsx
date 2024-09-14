import React from "react";
import { useAuth } from "../../script/AuthContent.js";
import "./Header.scss"


function Header() {
    const { user } = useAuth();

  return (
    <header className="header">
      <img className="header__logo" src="./assets/images/SHELFSAGE.png" alt="shelfsage logo"></img>
      { user ? (
        <div className="header-logged-in">
            <div className="header-logged-in">
                <span className="">Welcome, {user.username}</span>
                <button className="" onClick={() => {}}>Logout</button>
            </div>
            <nav className="header-logged-in__nav">
                <a className="header-logged-in__nav-home" href="">Home</a>
                <a className="header-logged-in" href="">Shelf</a>
                <a className="header-logged-in" href="">Recommendations</a>
                <a className="header-logged-in" href="">Profile</a>
            </nav>
        </div>
      ) : (
        <div className="header-logged-out">
            <a className="header-logged-out__login">Login</a>
            <a className="header-logged-out__signup">Signup</a>
        </div>
      )}
    </header>
  );
};

export default Header;