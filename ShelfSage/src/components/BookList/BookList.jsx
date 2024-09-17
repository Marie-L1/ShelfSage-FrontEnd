import React, { useState, useEffect } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./BookList.scss";

function BookList({ query }) {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      const fetchBooks = async () => {
        try{
            const response = await axios.get("/api/books/search", {
              params: { q: query },
            });
            setBooks(response.data);
        }catch(error){
            console.error("Error fetching books");
        }
      };
      if (query) {
        fetchBooks();
      }
    }, [query]);

  return (
    <div className="book-list">
      {books.map(book => (
        <div key={book.id} className="book-list__wrapper">
          <img className="book-list__cover" src={book.coverImage} alt={book.title} />
          <h3 className="book-list__title">{book.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default BookList;