import React from "react";
import "./Profile.scss";
import { useAuth } from "../../script/AuthContent.jsx";
import backgroundImage from "../../assets/images/open book.jpg"

function Profile() {
  const { user } = useAuth();

  return (
    <section className="profile">
    <ul className="profile__content">
      <li><span>Username:</span>{}</li>

    </ul>
  </section>
  )
}

export default Profile;