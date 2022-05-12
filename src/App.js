import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact"
import Portofolio from "./components/Portofolio/Portofolio";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portofolio />
      <Contact />
    </>
  );
};

export default App;
