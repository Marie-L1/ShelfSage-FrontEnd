import React, {useState} from "react";
import "./LoggedInHome.scss";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import backgroundImage from '../../assets/images/pages-img.jpg';
import PopularBooksList from "../../components/BookLists/PopularBooks";
import FantasyBooks from "../../components/BookLists/FantasyList";
import AuthorBooks from "../../components/BookLists/AuthorList";
import NonFictionBooks from "../../components/BookLists/NonFictionList";

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
        <div className="list-books">
          <h2 className="list-books__title">Popular</h2>
          <PopularBooksList />
        </div>
        <div classname="list-books">
        <h2 className="list-books__title">Sarah J. Maas</h2>
          <AuthorBooks />
        </div>
        <div classname="list-books">
        <h2 className="list-books__title">Fantasy</h2>
          <FantasyBooks />
        </div>
        <div classname="list-books">
        <h2 className="list-books__title">Non-Fiction</h2>
          <NonFictionBooks />
        </div>
      </section>
      
    </section>
  )
}

export default Home;