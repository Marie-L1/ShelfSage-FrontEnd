import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import APIhandler from "../../script/apiHandler";

function SearchResultsPage() {
  const [books, setBooks] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const api = new APIhandler();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const results = await api.searchBooks(query);
        setBooks(results);
      } catch (error) {
        console.error("Error fetching search results", error);
      }
    };

    if (query) fetchBooks();

  }, [query, api]);

  return (
    <div className="search-results-page">
      <h1>Search Results for: {query}</h1>
      {books.length > 0 ? (
        <div className="book-list">
          {books.map((book) => (
            <div key={book.id} className="book-item">
              <h3>{book.title}</h3>
              <p>{book.authors?.join(", ")}</p>
              <img src={book.coverImage} alt={book.title} />
              <p>{book.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No books found</p>
      )}
    </div>
  );
}

export default SearchResultsPage;
