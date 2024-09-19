import React, { useState, useEffect } from "react";
import APIhandler from "../../script/apiHandler";
import "./Modal.scss";

const BookModal = ({ id }) => {
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const apiHandler = new APIhandler(); // Create an instance of APIhandler

  useEffect(() => {
      const fetchBookDetails = async () => {
          try {
              if (!id) {
                  console.error("No ID provided");
                  return;
              }

              console.log("Fetching book details for ID:", id);
              const bookData = await apiHandler.getBookDetails(id);
              console.log("Book data received:", bookData);

              if (bookData) {
                  setBook(bookData);
              } else {
                  setError("No book data found");
              }
          } catch (error) {
              setError("Error fetching book details");
              console.error("Error fetching book details:", error);
          }
      };

      fetchBookDetails();
  }, [id]);

  const handleAddToShelf = async () => {
      setIsAdding(true);
      try {
          await apiHandler.addBookToShelf(id);
          alert("Book added to your shelf!");
      } catch (error) {
          setError("Error adding book to shelf");
      } finally {
          setIsAdding(false);
      }
  };

  if (!book) return null;

    // If book data isn't available, show a loader or nothing
    if (!book) return null;

    return (
        <div className="book-modal">
            <button className="book-modal__close">X</button>
            {error && <p className="book-modal__error">{error}</p>}
            <h2 className="book-modal__title">{book.title}</h2>
            <img
                className="book-modal__cover"
                src={book.coverImage} 
                alt={book.title}
            />
            <p className="book-modal__author">{book.author}</p>
            <p className="book-modal__description">
                {book.description}
            </p>
            <button
                className="book-modal__add-button"
                onClick={handleAddToShelf}
                disabled={isAdding}
            >
                {isAdding ? "Adding..." : "Add to Shelf"}
            </button>
        </div>
    );
}

export default BookModal;
