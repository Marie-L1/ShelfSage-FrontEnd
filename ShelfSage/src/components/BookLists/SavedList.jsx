import React, { useState, useEffect } from "react";
import APIhandler from "../../script/apiHandler";
import "./SavedList.scss";

function SavedBooks() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const api = new APIhandler(); 

    useEffect(() => {
        const fetchSavedBooks = async () => {
            const token = localStorage.getItem("token") // passing token correctly
            if (!token) {
                setError("No authentication token found");
                return; 
            }
            try {
                const booksData = await api.getUserShelf(token); 
                if (Array.isArray(booksData)) {
                    setBooks(booksData); 
                } else {
                    setError("No books found");
                }
            } catch (error) {
                setError("Error fetching saved books");
                console.error(error);
            }
        };
        fetchSavedBooks();
    }, []); 

    return (
        <div className="saved-list">
        {error ? (
            <p>{error}</p> // Display error if any
        ) : (
            books.map((book) => (
                <ul key={book.id} className="saved-list__wrapper">
                    <li className="saved-list__item"><img 
                        className="saved-list__cover" 
                        src={book.coverImage}
                        alt={book.title} 
                    /></li>
                    <li className="saved-list__item"><h3 className="saved-list__title">{book.title}</h3></li>
                    <li className="saved-list__item"><p className="saved-list__author">{book.author[0]}</p></li>
                </ul>
            ))
        )}
    </div>
    );
}

export default SavedBooks;