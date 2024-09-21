import React, {useState} from "react";
import "./LoggedInHome.scss";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import backgroundImage from '../../assets/images/pages-img.jpg';
import PopularBooksList from "../../components/BookLists/PopularBooks";
import SciFiBooks from "../../components/BookLists/SciFiList";
import MaasBooks from "../../components/BookLists/MaasList";
import TolkienBooks from "../../components/BookLists/TolkienList";

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
      <section className="book-lists-column">
        <div className="book-lists-column__items">
          <h2 className="book-lists-column__title">Classics</h2>
          <PopularBooksList />
        </div>
        <div className="book-lists-column__items">
        <h2 className="book-lists-column__title">Sci Fi</h2>
          <SciFiBooks />
        </div>
        <div className="book-lists-column__items">
        <h2 className="book-lists-column__title">Sarah J. Maas</h2>
          <MaasBooks />
        </div>
      </section>
      <div className="book-lists-column__items">
        <h2 className="book-lists-column__title">J.R.R Tolkien</h2>
          <TolkienBooks />
        </div>
      
    </section>
  )
}

export default Home;