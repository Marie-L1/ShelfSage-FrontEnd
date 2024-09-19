import React from "react";
import "./Modal.scss";

const BookModal = ({ id, title, author, description, coverImage, onClose }) => {
  return (
    <div className="book-modal">
        <div className="book-modal-content">
            <h2 className="book-modal-content__title">{title}</h2>
            <img
                className="book-modal-content__cover"
                src={coverImage} 
                alt={title}
            />
            <p className="book-modal-content__author">by {author}</p>
            <p className="book-modal-content__description">
                {description}
            </p>
        </div>
        <div className="book-modal-content__buttons">
                <button className="book-modal-content__close-btn" onClick={onClose}>Close</button>
                <button
                    className="book-modal-content__add-btn"
                    onClick={() => console.log(`Adding book ${id} to shelf`)} // Add your actual handler here
                >
                    Add to Shelf
                </button>
            </div>
    </div>
  );
}

export default BookModal;
