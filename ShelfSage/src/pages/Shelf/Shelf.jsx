import React from "react";
import "./Shelf.scss";
import { useAuth } from "../../script/AuthContent.jsx";
import backgroundImage from "../../assets/images/shelf-img.jpg";
import SavedBooks from "../../components/BookLists/SavedList.jsx";

function Shelf() {
  const { user } = useAuth();

  return (
    <section className="home">
    <div className="hero">
      <img className="hero__img" src={backgroundImage} alt="open books"></img>
      <div className="hero__content-wrapper">
        <h2 className="hero__title">{user.username}'s Books</h2>
      </div>
    </div>
    <div className="user-books">
    <SavedBooks />
    </div>
  </section>
  )
}

export default Shelf;