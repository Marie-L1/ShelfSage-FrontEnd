import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import APIhandler from "../../script/apiHandler";
import "./SearchResults.scss";

function SearchResult({id, token}) {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [userId, setUserId] = useState(null)
  const userToken = localStorage.getItem("token")
  const location = useLocation();
  const api = new APIhandler();

  // Extract the query parameter from the URL
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const results = await api.getSearchBooks(query);
        if (Array.isArray(results)) {
          setBooks(results);
        } else {
          setError("No books found");
        }
      } catch (error) {
        setError("Error fetching search results");
        console.error(error);
      }
    };
    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  // Fetch user info for adding books to the shelf
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const userId = await api.isLoggedIn(userToken);
        setUserId(userId.user_id);
      } catch (error) {
        console.log("No user found");
      }
    };
    getUserInfo();
  }, [userToken]);

  const addToShelf = async (book) => {
    const bookId = book?.id;
    try {
      await api.addBookToShelf(userToken, userId, bookId);
      console.log(`Book ${bookId} added to shelf`);
    } catch (error) {
      console.error("Error adding book to shelf", error);
    }
  };

  return (
    <section>
    <ul className="search-results">
      {error ? (
        <p>{error}</p>
      ) : (
        books.map((book) => (
          <div key={book.id} className="search-results__wrapper">
            <li className="search-results__item"><img
              className="search-results__cover"
              src={book.coverImage}
              alt={book.title}
            />
            <div className="search-results__text-wrapper">
            <h3 className="search-results__title">{book.title}</h3>
            <p className="search-results__author">{book.author[0]}</p>
            <p className="search-results__description">{book.description}</p>
            <button
                    className="book-modal-content__add-btn"
                    onClick={() => {
                        console.log(`Adding book ${id} to shelf`);
                        addToShelf(book); 
                    }}
                    >
                    Add to Shelf
                </button>
            </div>
           </li>
        </div>
        ))
      )}
    </ul>
    </section>
  );
}

export default SearchResult;
