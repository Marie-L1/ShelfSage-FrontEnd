import React, { useState, useEffect } from "react";
import APIhandler from "../../script/apiHandler";
import "./BookListScroll.scss";
import BookModal from "../Modal/Modal";

function RecBooks() {
    const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const api = new APIhandler(); // Create an instance of the API handler
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state
  const [userId, setUserId] = useState(null);
  const userToken = localStorage.getItem("token");

    useEffect(() => {
        const fetchRecBooks = async () => {
            const token = localStorage.getItem("token"); // Get token from local storage
            if (!token) {
                setError("No authentication token found");
                return; 
            }
            try {
                const booksData = await api.getRecBooks(token); // Fetch recommended books
                if (Array.isArray(booksData)) {
                    setBooks(booksData); // Set the recommended books in state
                } else {
                    setError("No recommended books found");
                }
            } catch (error) {
                setError("Error fetching recommended books");
                console.error(error);
            }
        };

        fetchRecBooks();
    }, []); // Empty dependency array means this runs once on component mount

    useEffect(() => {
        const getUserInfo = async () => {
          try {
            const userId = await api.isLoggedIn(userToken);
            setUserId(userId.user_id);
          } catch (error) {
            console.log("No user found");
          }
          getUserInfo();
        };
      }, [userId]);
    const openModal = (book) => {
        console.log("opening modal for book:", book);
        setSelectedBook(book);
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBook(null);
      };
    
      // Handle "Add to Shelf"
      const addToShelf = async () => {
        const bookId = selectedBook?.id;
        try {
          await api.addBookToShelf(userToken, userId, bookId);
          console.log(`Book ${bookId} added to shelf`);
          closeModal(); // Close the modal after adding to the shelf
        } catch (error) {
          console.error("Error adding book to shelf", error);
        }
      };

    return (
        <section className="book-list-container">
      <div className="book-list">
        {error ? (
          <p>{error}</p>
        ) : (
          books.map((book) => (
            <div
              key={book.id}
              className="book-list__wrapper"
              onClick={() => openModal(book)}
            >
              <img
                className="book-list__cover"
                src={book.coverImage}
                alt={book.title}
              />
              <h3 className="book-list__title">{book.title}</h3>
              <p className="book-list__author">{book.author}</p>
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
    </section>
    );
}

export default RecBooks;
