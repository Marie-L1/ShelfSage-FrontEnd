import React, { useState, useEffect } from "react";
import APIhandler from "../../script/apiHandler";
import "./BookList.scss";

function PopularBooks() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const api = new APIhandler(); // Create an instance of the API handler

    useEffect(() => {
        const fetchPopularBooks = async () => {
            try {
                const booksData = await api.getPopularBooks();
                if (Array.isArray(booksData)) {
                    setBooks(booksData); // Ensure booksData is an array
                } else {
                    setError("No books found");
                }
            } catch (error) {
                setError("Error fetching popular books");
                console.error(error);
            }
        };
        fetchPopularBooks();
    }, [api]);

    return (
        <div className="book-list">
        {error ? (
            <p>{error}</p> // Display error if any
        ) : (
            books.map((book) => (
                <div key={book.id} className="book-list__wrapper">
                    <img 
                        className="book-list__cover" 
                        src={book.coverImage}
                        alt={book.title} 
                    />
                    <h3 className="book-list__title">{book.title}</h3>
                    <p className="book-list__author">{book.author[0]}</p>
                </div>
            ))
        )}
    </div>
    );
}

export default PopularBooks;
