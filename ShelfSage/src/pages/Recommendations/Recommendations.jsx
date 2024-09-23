import React from "react";
import "./Recommendations.scss";
import { useAuth } from "../../script/AuthContent.jsx";
import backgroundImage from "../../assets/images/book-stack.jpg"
import RecBookList from "../../components/BookLists/RecBookList.jsx";

function Recommendations() {
    const { user } = useAuth();

  return (
    <section className="home">
    <div className="hero">
      <img className="hero__img" src={backgroundImage} alt="open books"></img>
      <div className="hero__content-wrapper">
        <h2 className="hero__title">{user.username}'s Recommendations</h2>
      </div>
    </div>
    <div className="user-recs">
      <RecBookList />
      <RecBookList />

    </div>
  </section>
  )
}

export default Recommendations;