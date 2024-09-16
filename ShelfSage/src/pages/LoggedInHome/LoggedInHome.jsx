import React from "react";
import "./Home.scss";
import icon from '../../assets/icons/search-24px.svg';
import icon from "../../assets/icons/search-24px.svg";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

function Home() {
  return (
    <section className="">
      <div className="hero">
        <h2></h2>
        <SearchBar classname="hero__search" onSearch={onSearch} />
      </div>
      <div className="popular-books">
        <h2>Popular Books</h2>
        <ul>

        </ul>
      </div>
    </section>
  )
}

export default Home;