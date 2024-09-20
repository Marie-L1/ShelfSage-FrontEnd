import React, {useState} from "react";
import "./LoggedInHome.scss";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import backgroundImage from '../../assets/images/pages-img.jpg';
import PopularBooksList from "../../components/BookLists/PopularBooks";
import SciFiBooks from "../../components/BookLists/SciFiList";
import MaasBooks from "../../components/BookLists/MaasList";
import RowlingBooks from "../../components/BookLists/RowlingList";

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
          <h2 className="list-books__title">Classics</h2>
          <PopularBooksList />
        </div>
        <div classname="list-books">
        <h2 className="list-books__title">Sci Fi</h2>
          <SciFiBooks />
        </div>
        <div classname="list-books">
        <h2 className="list-books__title">Sarah J. Maas</h2>
          <MaasBooks />
        </div>
      </section>
      <div classname="list-books">
        <h2 className="list-books__title">J.k Rowling</h2>
          <RowlingBooks />
        </div>
      
    </section>
  )
}

export default Home;