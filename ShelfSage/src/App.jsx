import { useState } from 'react'
import './App.scss'

function App() {
  

  return (
    <>
    <header>
      <img className="" src="./assets/images/SHELFSAGE.png" alt="shelfsage logo"></img>
      <div>
        <img src="#"></img>
        <h2></h2>
        <></>
      </div>
      <ul className="nav">
        <li className='nav__home'>
          <img src="./assets/icons/home.svg"></img>
          <h3>Home</h3>
        </li>
        <li className="nav__shelf">
          <img src="./assets/icons/shelf.svg"></img>
          <h3>Shelf</h3>
        </li>
        <li className="nav__rec">
          <img src="./assets/icons/recommendations.svg"></img>
          <h3>Recommendations</h3>
        </li>
        <li className="nav__profile">
          <img src="./assets/icons/profile.svg"></img>
          <h3>Profile</h3>
        </li>
      </ul>
    </header>
    

    </>
  )
}

export default App
