import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import Pnf404 from './pages/404/Pnf404';
import './App.css'

function App() {
  return (
    <div className="app-container">
        <>
          <Navbar />
          <Preloader/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="*" element={<Pnf404 />} />
          </Routes>
        </>
    </div>
  );
}

export default App
