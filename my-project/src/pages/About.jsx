export default function About() {
  return (
    <div className="min-h-[calc(100svh-4rem)] bg-calce text-carbone antialiased flex items-center justify-center py-16 md:py-24 px-6 lg:px-12">
      
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

        
        
        {/* Colonna Sinistra: Composizione Editoriale a Strati */}
        <div className="relative flex justify-center md:justify-start">
          


          {/* Riquadro Fotografico Principale */}
          <div className="relative z-10 w-full max-w-sm sm:max-w-md aspect-[4/5] overflow-hidden bg-[#F0ECE6] shadow-md">
            <img
              src="/images/bobby.jpeg"
              alt="Mara - Fili e Capricci"
              className="w-full h-full object-cover object-center"
            />
          </div>
          
        </div>

        {/* Colonna Destra: Informazioni e Spazio Narrativo */}
        <div className="flex flex-col justify-center text-left">
          
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-tortora"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-tortora font-medium">
              Atelier Indipendente
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-normal tracking-wide text-carbone mb-3 uppercase">
            About Me
          </h1>

          <span className="text-xs uppercase tracking-[0.2em] text-moka font-medium block mb-6">
            Mara — Designer & Fondatrice
          </span>

          <div className="space-y-5 text-moka text-sm sm:text-base leading-relaxed font-light mb-8">
            <p>
              Fili e Capricci nasce dal desiderio di dare forma e sostanza a un ritmo diverso. Ogni borsa è un pezzo unico, lavorato interamente a mano tramite l'intreccio meticoloso di filati pregiati e minuterie ricercate.
            </p>
            <p>
              Non si tratta di semplice uncinetto, ma di una vera e propria scultura tessile: ogni modello prende vita dall'incontro tra la disciplina del nodo e la personalità di chi lo indosserà.
            </p>
          </div>

          {/* Citazione in riquadro caldo per arricchire il blocco visivo */}
          <div className="bg-sabbia/40 border-l-2 border-tortora p-4 mb-8 text-xs leading-relaxed text-moka italic font-serif">
            "La perfezione industriale è replicabile ovunque. Il valore di un manufatto artigianale risiede nel tempo irripetibile che gli viene dedicato."
          </div>

          {/* Icone Social e Contatti */}
          <div className="flex items-center gap-6 text-moka">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-1 hover:text-carbone transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-1 hover:text-carbone transition-all duration-300 hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a 
              href="mailto:ordini@filiecapricci.it" 
              className="p-1 hover:text-carbone transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Email"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}