import React, { useState, useEffect } from "react";
import APIhandler from "../../script/apiHandler";
import "./BookListScroll.scss";
import BookModal from "../Modal/Modal";


function NonFictionBooks({id, token}) {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const api = new APIhandler(); // Create an instance of the API handler
    const [selectedBook, setSelectedBook] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state
    const [userId, setUserId] = useState(null)
    const userToken = localStorage.getItem("token")


    useEffect(() => {
        const fetchNonFictionBooks = async () => {
            try {
                const booksData = await api.getNonFictionBooks();
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
        fetchNonFictionBooks();
    }, []);

    useEffect(() => {
        const getUserInfo = async () => {
            try{
                const userId = await api.isLoggedIn(userToken)
                setUserId(userId.user_id)
            }
            catch(error){
                console.log("No user found")
            }
        getUserInfo()
        }
    },[userId])


    const openModal = (book) => {
        console.log("opening modal for book:", book)
        setSelectedBook(book); 
        setIsModalOpen(true); 
    };

    const closeModal = () => {
        setIsModalOpen(false); 
        setSelectedBook(null); 
    };

     // Handle "Add to Shelf"
    const addToShelf = async () => {
        const bookId = selectedBook?.id
        try {
        await api.addBookToShelf(userToken, userId, bookId);
        console.log(`Book ${bookId} added to shelf`);
        closeModal(); // Close the modal after adding to the shelf
        } catch (error) {
        console.error("Error adding book to shelf", error);
        }
    };


    return (
        <div className="book-list">
        {error ? (
            <p>{error}</p> 
        ) : (
            books.map((book) => (
                <div key={book.id} className="book-list__wrapper" onClick={() => openModal(book)}>
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

{isModalOpen && selectedBook && (
    <BookModal 
        id={selectedBook.id} 
        title={selectedBook.title} 
        author={selectedBook.author[0]} 
        description={selectedBook.description}
        coverImage={selectedBook.coverImage} 
        onClose={closeModal} 
        onAddToShelf={addToShelf}
    />
)}
    </div>
    );
}

export default NonFictionBooks;
