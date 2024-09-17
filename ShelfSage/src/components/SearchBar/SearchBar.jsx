import React, {useState} from "react";
import icon from "../../assets/icons/search-24px.svg"
import "./SearchBar.scss";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try{
      const response = await axios.get("/api/books/search", {
        params: { q: query },
      });
      setBooks(response.data)
    }catch(error){
      console.error("Error search for book")
    }
  }

  return (
    <form className="search">
      <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search" 
                className="search__input"
            />
      <button type="submit" className="search__btn" onClick={handleSearch}>
        <img src={icon} alt="search__icon" className="search__icon" />
      </button>
    </form>
  );
}

export default SearchBar;
