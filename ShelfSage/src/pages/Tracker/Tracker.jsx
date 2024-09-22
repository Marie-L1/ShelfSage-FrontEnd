import React, { useState } from "react";
import "./Tracker.scss";
// import backgroundImage from "../../assets/./images/profile-hero.jpg"

function Profile() {
  const [totalBooks, setTotalBooks] = useState(""); // default
  const [readBooks, setReadBooks] = useState(0);

  // Handle setting the reading goal
  const handleSetGoal = (e) => {
    e.preventDefault();
    const goalInput = e.target.elements.goal.value;
    if (goalInput >= readBooks) {
      setTotalBooks(parseInt(goalInput, 10));
    } else {
      alert("New goal can't be less than books already read!");
    }
  };

  // Handle marking books as read
  const handleMarkAsRead = () => {
    if (readBooks < totalBooks) {
      setReadBooks((prevCount) => prevCount + 1);
    }
  };

  // Calculate progress percentage
  const progressPercentage = (readBooks / totalBooks) * 100;

  return (
    <section className="tracker-page">
      {/* <img className="page-img" src={backgroundImage} alt="plant"></img> */}
      <div className="tracker">
         <h1 className="tracker__title">Monthly Reading Goal</h1>
        <form className="tracker__form" onSubmit={handleSetGoal}>
          <label className="tracker__form-title">Reading goal for the month:</label>
          <input
            className="tracker__form-input"
            type="number"
            id="goal"
            placeholder="5"
            defaultValue={totalBooks}
            min="1"
          />
          <button className="tracker__form-btn" type="submit">
            Set Goal
          </button>
        </form>

        <div className="tracker__progress">
          <div
            className="tracker__progress-bar"
            style={{ width: `${progressPercentage}%` }}
          ><span className="tracker__progress-text">{progressPercentage}%</span></div>

        <p className="tracker__progress-feedback">
          You’ve read {readBooks} out of {totalBooks} books!
        </p>

        <button
          className="tracker__progress-btn"
          onClick={handleMarkAsRead}
          disabled={readBooks >= totalBooks}
          >
          Add Book
        </button>
           </div>
      </div>
    </section>
  );
}

export default Profile;
