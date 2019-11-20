import React from 'react';
import './reset.css';
import './App.css';
import Nav from '../Nav/Nav';
import SideNav from '../SideNav/SideNav';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <SideNav/>
      <Home />
      <About/>
      <Contact/>
    </div>
  );
}

export default App;