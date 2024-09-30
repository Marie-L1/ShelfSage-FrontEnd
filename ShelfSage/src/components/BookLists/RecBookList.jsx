import React, { useState, useEffect } from "react";
import APIhandler from "../../script/apiHandler";
import "./SavedList.scss";
import BookModal from "../Modal/Modal";

function RecBooks() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const api = new APIhandler();
    const [selectedBook, setSelectedBook] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const userToken = localStorage.getItem("token");

    useEffect(() => {
      const fetchRecBooks = async () => {
          try {
              const booksData = await api.getRecBooks(userToken);
              
              if (Array.isArray(booksData)) {
                  // Filter out any null responses and remove invalid books
                  const validBooks = booksData.filter(book => book !== null);
                  setBooks(validBooks);
              } else {
                  setError("No related books found");
              }
          } catch (error) {
              setError("Error fetching related books");
              console.error(error);
          }
      };
      fetchRecBooks();
  }, [userToken]);

    const openModal = (book) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBook(null);
    };

    const addToShelf = async () => {
        const bookId = selectedBook?.id;
        try {
            await api.addBookToShelf(userToken, bookId);
            console.log(`Book ${bookId} added to shelf`);
            closeModal();
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
                            <p className="book-list__author">{book.author || "Unknown Author"}</p>
                        </div>
                    ))
                )}

                {isModalOpen && selectedBook && (
                    <BookModal
                        id={selectedBook.id}
                        title={selectedBook.title}
                        author={selectedBook.author}
                        description={selectedBook.description} // Ensure this is part of the book data
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
