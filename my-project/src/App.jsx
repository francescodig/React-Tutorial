import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Viene importata solo qui
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Footer from './components/Footer'; 
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />
      <Navbar />

      {/* Questo è il contenitore in cui React inietta la pagina corretta in base all'URL */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/aboutme" element={<About />} />
        </Routes>
      </div>

    <Footer />

    </BrowserRouter>
  );
}