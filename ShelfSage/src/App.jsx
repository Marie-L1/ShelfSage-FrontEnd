import "./App.scss";
import React from "react";
import { BroswerRouter, Router, Route, Switch, Redirect } from "react-router-dom";
import { useAuth } from "./script/AuthContent"
import Header from "./components/Header/Header";

function App() {
  const { user, loading } = useAuth();
  
  return (
    <>
    <Header />
    <section className="main-content">
      

    </section>
    

    </>
  )
}

export default App
