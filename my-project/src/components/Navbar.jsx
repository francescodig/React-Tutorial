import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white border-b border-gray-100">
      <nav className="flex items-center justify-between px-4 py-3 max-w-5xl mx-auto relative z-50">
        
        {/* Blocco Sinistro: Hamburger su mobile / Link su desktop */}
        <div className="flex-1">
          <button 
            onClick={toggleMenu} 
            className="text-2xl text-gray-800 md:hidden"
            aria-label="Menu principale"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <Link to="/" className="hover:text-pink-500 transition-colors">Home</Link>
            <Link to="/catalogo" className="hover:text-pink-500 transition-colors">Borse su ordinazione</Link>
          </div>
        </div>

        {/* Blocco Centrale: Logo con posizionamento assoluto per simmetria perfetta */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex flex-col items-center hover:opacity-75 transition-opacity">
            <h1 className="text-xl font-semibold tracking-wide text-blue-900">
              Fili e Capricci
            </h1>
            <span className="text-xs text-blue-500 italic">
              Borse all'uncinetto
            </span>
          </Link>
        </div>
        
        {/* Blocco Destro: Icona Contatti */}
        <div className="flex-1 flex justify-end">
          <button aria-label="Invia una richiesta email" className="text-2xl text-gray-800">
            ✉️
          </button>
        </div>

      </nav>

      {/* Overlay Mobile: forzatamente nascosto (md:hidden) per evitare bug grafici se si allarga la finestra */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white pt-24 px-6 z-40 overflow-y-auto md:hidden">
          <div className="flex flex-col gap-6 text-lg text-gray-800 max-w-5xl mx-auto">
            <Link to="/" onClick={toggleMenu} className="border-b border-gray-100 pb-4 hover:text-pink-400 transition-colors">
              Home
            </Link>
            <Link to="/catalogo" onClick={toggleMenu} className="border-b border-gray-100 pb-4 hover:text-pink-400 transition-colors">
              Borse su ordinazione
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}