import React, {useState} from "react";
import "./LoggedInHome.scss";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import backgroundImage from '../../assets/images/pages-img.jpg';

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <img className="hero__img" src={backgroundImage} alt="open books"></img>
        <div className="hero__content-wrapper">
          <h2 className="hero__title">Find Your Books</h2>
          <SearchBar classname="hero__search" />
        </div>
      </div>
      <div className="popular-books">
        <h2>Popular Books</h2>
        
      </div>
    </section>
  )
}

export default Home;