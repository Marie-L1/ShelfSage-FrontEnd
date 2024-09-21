import React from "react";
import "./Profile.scss";
import { useAuth } from "../../script/AuthContent.jsx";
import backgroundImage from "../../assets/images/open book.jpg"

function Profile() {
  const { user } = useAuth();

  return (
    <section className="home">
    <div className="hero">
      <img className="hero__img" src={backgroundImage} alt="open books"></img>
      <div className="hero__content-wrapper">
        <h2 className="hero__title">{user.username}'s Profile</h2>
      </div>
    </div>
    <form className="update-profile">

    </form>
  </section>
  )
}

export default Profile;