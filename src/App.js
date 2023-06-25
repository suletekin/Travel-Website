import './App.css';
import Menu from './Components/Menu.js';
import Reviews from './Components/Reviews.js';
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
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
