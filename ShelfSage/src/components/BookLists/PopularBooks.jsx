import React, { useState, useEffect } from "react";
import APIhandler from "../../script/apiHandler";
import "./BookListScroll.scss";
import BookModal from "../Modal/Modal";


function PopularBooks() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const api = new APIhandler(); // Create an instance of the API handler
    const [selectedBookId, setSelectedBookId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

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


    const openModal = (id) => {
        setSelectedBookId(id); // Set the selected book ID
        setIsModalOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsModalOpen(false); 
        setSelectedBookId(null); 
    };


    return (
        <div className="book-list">
        {error ? (
            <p>{error}</p> 
        ) : (
            books.map((book) => (
                <div key={book.id} className="book-list__wrapper" onClick={() => openModal(book.id)}>
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

            {isModalOpen && (
                <BookModal id={selectedBookId} onClose={closeModal} />
            )}
    </div>
    );
}

export default PopularBooks;
