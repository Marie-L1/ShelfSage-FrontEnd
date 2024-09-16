import React from "react";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (!searchValue.trim()) {
        alert("Please enter a book title");
        return;
      }
    if (onSearch) {
      onSearch(searchValue);
    }
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search__input"
        placeholder="Search"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button type="submit" className="search__btn">
        <img src={icon} alt="search__icon" />
      </button>
    </form>
  );
}

export default SearchBar;
