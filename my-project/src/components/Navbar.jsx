import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F9F8F6] border-b border-[#E5DFD5]">
      {/* Il contenitore deve avere 'relative' affinché il logo possa centrarsi su di esso */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        
        {/* Blocco 1: Navigazione a sinistra (deve stare per primo nel codice) */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#524B44]">
          <Link to="/" className="relative group py-2">
            <span className="group-hover:text-[#181615] transition-colors">Home</span>
            <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-[#181615] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="relative group py-2">
            <span className="group-hover:text-[#181615] transition-colors">About Me</span>
            <span className="absolute bottom-1 left-0 w-0 h-[1px] bg-[#181615] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Blocco 2: Logo al centro esatto (estratto dal flusso) */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
          <Link to="/" className="pointer-events-auto hover:opacity-80 transition-opacity font-serif text-2xl tracking-widest text-[#181615] uppercase">
            Actjtude
          </Link>
        </div>

        {/* Blocco 3: Azione a destra (deve chiudere la barra) */}
        <div className="flex items-center">
          <Link 
            to="/catalogo" 
            className="group flex items-center gap-2 text-[#524B44] hover:text-[#181615] transition-colors p-1"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.2" 
              className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
            <span className="hidden sm:inline-block text-xs uppercase tracking-widest font-medium">
              Collezione
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}