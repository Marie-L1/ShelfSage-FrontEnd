import React, { useState } from "react";
import icon from "../../assets/icons/search-24px.svg";
import "./SearchBar.scss";
import APIhandler from "../../script/apiHandler";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const api = new APIhandler(); // Instantiate API handler

  const handleSearch = async (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page
    if (!query) return;
    try {
      const results = await api.getSearchBooks(query);
      setBooks(results); // Store search results
      navigate(`/search?q=${encodeURIComponent(query)}`);
    } catch (error) {
      console.error("Error searching for books", error);
    }
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for books"
        className="search__input"
      />
      <button type="submit" className="search__btn">
        <img src={icon} alt="search__icon" className="search__icon" />
      </button>
    </form>
  );
}

export default SearchBar;
