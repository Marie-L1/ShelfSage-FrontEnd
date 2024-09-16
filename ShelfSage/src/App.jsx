import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth } from "./script/AuthContent"
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoggedInHome from "./pages/LoggedInHome/LoggedInHome.jsx";
import LoggedOutHome from "./pages/LoggedOutHome/LoggedOutHome.jsx";
import Shelf from "./pages/Shelf/Shelf.jsx";
import Recommendations from "./pages/Recommendations/Recommendations.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import LoginForm from "./components/Forms/LoginForm.jsx";
import SignupForm from "./components/Forms/SignupForm.jsx";

function App() {
  const AuthContent = useAuth();
  console.log(AuthContent); // debugging
  
  const { user } = useAuth();
  console.log(user)
  
  return (
    <>
    <Router>
    <Header />
      <Routes>
        {user ? (
          <>
          <Route path="/" element={<LoggedInHome />} />
          <Route path="/shelf" element={<Shelf />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <>
          <Route path="/" element={<LoggedOutHome />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          </>
        )}
      </Routes>

    <Footer />
    </Router>
    </>
  )
}

export default App
