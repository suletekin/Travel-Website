import './App.css';
import Menu from './Components/Menu.js';
import Reviews from './Components/Reviews.js';
import Attractions from './Components/Attractions.js';
import Cities from './Components/Cities.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import About from './Components/About.js';
import { useState } from 'react';

function App() {

  const [city, setCity] = useState("Chicago");
  const [attractions, setAttraction] = useState("9nUrDQ_REhU6sgcgXFAyfA");

  const handleCityChange = () => {
    setCity("Austin");
    console.log(city);
  }

  return (
      <div class="background">
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/home" element={<Menu />} />
            <Route path="/Reviews" element={<Reviews attractions={attractions} />} />
            <Route path="/Attractions" element={<Attractions city={city} />} />
            <Route path="/About" element={<About />} />
            <Route path="/Cities" element={<Cities city={city} setCity={handleCityChange} />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
