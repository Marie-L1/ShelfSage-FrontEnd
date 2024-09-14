import "./App.scss";
import React from "react";
import { BroswerRouter, Router, Route, Switch, Redirect } from "react-router-dom";
import { useAuth } from "./script/AuthContent"
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
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

    </Router>
    </BroswerRouter>
    </>
  )
}

export default App
