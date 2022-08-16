//import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
//import BoutonIncrement from './components/BoutonIncrement';
//import  Users  from './components/Users';

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="App">
      
<Nav/>
      <Routes>
        <Route path="notfound" element={<NotFound/>}/>
      <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Header
        title="React JS"
        texte="librairie javascript fonde par Facebook"/>

   {/* <RandomUser /> */}

      {/* <Users /> */}
    <Footer/>

    </div>
   
  );
};

export default App;
