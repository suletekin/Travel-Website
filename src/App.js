import './App.css';
import Menu from './Components/Menu.js';
import Reviews from './Components/Reviews.js';
import Trips from './Components/Trips.js';
import Cities from './Components/Cities.js';
import Countries from './Components/Countries.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';

function App() {
  return (
      <div>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/home" element={<Menu />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/Trips" element={<Trips />} />
            <Route path="/Cities" element={<Cities />} />
            <Route path="/Countries" element={<Countries />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
