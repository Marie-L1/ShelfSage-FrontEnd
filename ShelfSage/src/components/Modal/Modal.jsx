import React, { useState, useEffect } from "react";
import APIhandler from "../../script/apiHandler";
import "./Modal.scss";

function BookModal({ bookId, onClose }) {
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const api = new APIhandler();
    const token = localStorage.getItem('authToken'); 

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const bookData = await api.getBookDetails(bookId);
                setBook(bookData);
            } catch (error) {
                setError("Error fetching book details");
            }
        };
        fetchBookDetails();
    }, [bookId]);

    const handleAddToShelf = async () => {
        setIsAdding(true);
        try {
            await api.addBookToShelf(token, bookId);
            alert("Book added to your shelf!");
        } catch (error) {
            setError("Error adding book to shelf");
        } finally {
            setIsAdding(false);
        }
    };

    // If book data isn't available, show a loader or nothing
    if (!book) return null;

    return (
        <div className="book-modal">
            <button className="book-modal__close" onClick={onClose}>X</button>
            {error && <p className="book-modal__error">{error}</p>}
            <h2 className="book-modal__title">{book.title}</h2>
            <img
                className="book-modal__cover"
                src={book.coverImage || "/path/to/default-cover.jpg"} // Provide a fallback if no coverImage
                alt={book.title}
            />
            <p className="book-modal__author">{book.author || "Unknown Author"}</p>
            <p className="book-modal__description">
                {book.description || "No description available."}
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
