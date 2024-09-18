import React, { useState } from "react";
import icon from "../../assets/icons/search-24px.svg";
import "./SearchBar.scss";
import APIhandler from "../../script/apiHandler";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page
    if (!query) return;
    try {
      const results = await api.searchBooks(query);
      setBooks(results);
      navigate(`/search?q=${encodeURIComponent(query)}`);
    } catch (error) {
      console.error("Error search for book");
    }
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search"
        className="search__input"
      />
      <button type="submit" className="search__btn">
        <img src={icon} alt="search__icon" className="search__icon" />
      </button>
    </form>
  );
}

export default SearchBar;
