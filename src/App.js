import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import 'semantic-ui-css/semantic.min.css'

import Header from './components/Header'
import Home from './components/Home'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const [activeItem, setActiveItem] = useState('home')
  return (
    <Router>
      <div className="App">
        <Header activeItem={activeItem} setActiveItem={setActiveItem} />

        <Route exact path="/" render={() => { setActiveItem("home"); return <Home /> }} />
        <Route exact path="/pricing" render={() => { setActiveItem("pricing"); return <Pricing /> }} />
        <Route exact path="/contact" render={() => { setActiveItem("contact"); return <Contact /> }} />
        <Route exact path="/about" render={() => { setActiveItem("about"); return <About /> }} />
        <Footer setActiveItem={setActiveItem} />
      </div>
    </Router>
  );
}

export default App;
