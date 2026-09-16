import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-calce border-t border-sabbia py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Blocco Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="font-serif text-2xl text-carbone tracking-tight hover:opacity-80 transition-opacity">
            ACTJTUDE
          </Link>
          <span className="text-xs text-tortora mt-2 uppercase tracking-widest">
            Atelier all'uncinetto
          </span>
        </div>

        {/* Canali Essenziali */}
        <div className="flex gap-8 text-xs font-medium uppercase tracking-widest text-moka">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-carbone transition-colors"
          >
            Instagram
          </a>
          <a 
            href="mailto:ordini@filiecapricci.it" 
            className="hover:text-carbone transition-colors"
          >
            Contatto Mail
          </a>  
        </div>

        {/* Chiusura e Diritti */}
        <div className="text-[11px] text-tortora tracking-wide">
          © {new Date().getFullYear()} ACTJTUDE. Pezzi unici.
        </div>

      </div>
    </footer>
  );
}