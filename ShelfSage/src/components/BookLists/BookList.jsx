import React, { useState, useEffect } from "react";
import APIhandler from "../../script/apiHandler";
import "./BookList.scss";
import defaultImage from "../../assets/images/default-cover.jpg"

function BookList({ query }) {
  const [books, setBooks] = useState([]);
  const api = new APIhandler(); 

  useEffect(() => {
      const fetchBooks = async () => {
          try {
              const responseData = await api.searchBooks(query); // Fetch books from API
              if (responseData && responseData.items) {
                  // Extract the data from response data
                  const formattedBooks = responseData.items.map(item => ({
                      id: item.id,
                      title: item.volumeInfo.title,
                      coverImage: item.volumeInfo.imageLinks?.thumbnail || defaultImage,
                  }));
                  setBooks(formattedBooks); 
              } else {
                  setBooks([]); // if no books are returned
              }
          } catch (error) {
              console.error("Error fetching books", error);
          }
      };
      if (query) {
          fetchBooks();
      }
  }, [query, api]);

    return (
        <div className="book-list">
            {books.map(book => (
                <div key={book.id} className="book-list__wrapper">
                    <img 
                        className="book-list__cover" 
                        src={book.coverImage?.thumbnail || {defaultImage}} // Handle missing cover images
                        alt={book.title} 
                    />
                    <h3 className="book-list__title">{book.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default BookList;
