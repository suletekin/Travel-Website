import './App.css';
import Menu from './Components/Menu.js';
import Reviews from './Components/Reviews.js';
import Attractions from './Components/Attractions.js';
import Cities from './Components/Cities.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import About from './Components/About.js';
import React, { useState } from 'react';

class App extends React.Component {

  state = {
    city: "Chicago",
    attraction: "9nUrDQ_REhU6sgcgXFAyfA",
  };

  handleCityChange = (newCity) => {
    this.setState({ city: newCity })
  }

  render() {
    return (
        <div class="background">
          <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/home" element={<Menu />} />
              <Route path="/Reviews" element={<Reviews attractions={this.attraction} />} />
              <Route path="/Attractions" element={<Attractions city={this.city} />} />
              <Route path="/About" element={<About />} />
              <Route path="/Cities" element={<Cities city={this.city} setCity={this.handleCityChange} />} />
            </Routes>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
