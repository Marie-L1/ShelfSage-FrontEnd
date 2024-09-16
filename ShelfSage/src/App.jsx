import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth } from "./script/AuthContent"
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Modal from "./components/Modal/Modal.jsx";
import LoggedInHome from "./pages/LoggedInHome/LoggedInHome.jsx";
import LoggedOutHome from "./pages/LoggedOutHome/LoggedOutHome.jsx";
import Shelf from "./pages/Shelf/Shelf.jsx";
import Recommendations from "./pages/Recommendations/Recommendations.jsx";
import Profile from "./pages/Profile/Profile.jsx";

function App() {
  const AuthContent = useAuth();
  console.log(AuthContent); // debugging
  const { user, loading } = useAuth();
  
  return (
    <>
    <Router>
    <Header />
      <Routes>
        {user ? (
          <Route path="/" exact component={LoggedInHome} />
        ) : (
          <Route path="/" exact component={LoggedOutHome} />
        )}
        <Route path="/shelf" element={<Shelf />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

    <Footer />
    </Router>
    </>
  )
}

export default App
