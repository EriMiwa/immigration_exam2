import React from 'react';
import './reset.css';
import './App.css';
import Nav from '../Nav/Nav';
import SideNav from '../SideNav/SideNav';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App">
      <Nav />
      <SideNav />
      <Element name="#home"><Home /></Element>
      <Element name="#about"><About /></Element>
      <Element name="#contact"><Contact /></Element>

    </div>
  );
}

export default App;