import "./App.scss";
import React from "react";
import { BroswerRouter, Router, Route, Switch, Redirect } from "react-router-dom";
import { useAuth } from "./script/AuthContent"
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Modal from "./components/Modal/Modal.jsx";
import LoggedInHome from "./pages/Home/LoggedInHome.jsx";
import LoggedOutHome from "./pages/Home/LoggedOutHome.jsx";
import Shelf from "./pages/Shelf/Shelf.jsx";
import Recommendations from "./pages/Recommendations/Recommendations.jsx";
import Profile from "./pages/Profile/Profile.jsx";

function App() {
  const { user, loading } = useAuth();
  
  return (
    <>
    <BroswerRouter>
    <Header />
    <Router>
      <Switch>
        {user ? (
          <Route path="/" exact component={LoggedInHome} />
        ) : (
          <Route path="/" exact component={LoggedOutHome} />
        )
      }
      </Switch>

    </Router>
    <Footer />
    </BroswerRouter>
    </>
  )
}

export default App
