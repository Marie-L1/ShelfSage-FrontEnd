import React from "react";
import "./Profile.scss";
import { useState, useEffect } from "react";
import backgroundImage from "../../assets/images/profile-hero.jpg";

function Profile() {
  const [totalBooks, setTotalBooks] = useState(5); // default
   const [readBooks, setReadBooks] = useState(0);

   const handleSetGoal = (e) => {
      e.preventDefault();
      const goalInput = e.target.elements.goal.value;
      setTotalBooks(parseInt(goalInput, 10));
      setReadBooks(0); 
   };

   const handleMarkAsRead = () => {
      if (readBooks < totalBooks) {
         setReadBooks(prevCount => prevCount + 1);
      }
   };

   const progressPercentage = (readBooks / totalBooks) * 100;


  return (
    <section className="profile">
      <div className="tracker">
        <img src={backgroundImage} alt="leaves" className="tracker__img" />
        <form className="tracker__form" onSubmit={handleSetGoal}>
            <label className="tracker__form-title">Set your reading goal for the month:</label>
            <input className="tracker__form-input" type="number" id="goal" defaultValue={totalBooks} min="1" />
            <button className="tracker__form-btn" type="submit">Set Goal</button>
         </form>
         <div className="progress">
            <div className="progress__bar" style={{ width: `${progressPercentage}%` }}></div>
         </div>
         <p className="process__feedback">You’ve read {readBooks} out of {totalBooks} books!</p>
        <button className="progress__add-btn" onClick={handleMarkAsRead} disabled={readBooks >= totalBooks}>
              Add Book
        </button>
      </div>

      <div className="user-info"></div>
    </section>
  );
}

export default Profile;
