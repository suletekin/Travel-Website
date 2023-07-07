import './App.css';
import Menu from './Components/Menu.js';
import Reviews from './Components/Reviews.js';
import Trips from './Components/Trips.js';
import Cities from './Components/Cities.js';
import Attractions from './Components/Attractions';
import Countries from './Components/Countries.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import About from './Components/About.js';

function App() {
  return (
      <div class="background">
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/home" element={<Menu />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/Trips" element={<Trips />} />
            <Route path="/About" element={<About />} />
            <Route path="/Cities" element={<Cities />} />
            <Route path="/Attractions" element={<Attractions />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
