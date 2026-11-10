export default function About() {
  return (
    <div className="min-h-[calc(100svh-4rem)] bg-calce text-carbone antialiased flex items-center justify-center py-16 md:py-24 px-6 lg:px-12">
      
      <div className="max-w-2xl w-full mx-auto text-left">

        {/* Header / Etichetta */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-6 h-px bg-tortora"></span>
          <span className="text-xs uppercase tracking-[0.25em] text-tortora font-medium">
            Atelier Indipendente
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-wide text-carbone mb-3 uppercase">
          About Me
        </h1>

        {/* Testo Storia */}
        <div className="space-y-6 text-moka text-base sm:text-lg leading-relaxed font-light mb-10">
          <p>
            Actjtude nasce dal desiderio di dare forma e sostanza a un ritmo diverso. Ogni borsa è un pezzo unico, lavorato interamente a mano tramite l'intreccio meticoloso di filati pregiati e minuterie ricercate.
          </p>
          <p>
            Non si tratta di semplice uncinetto, ma di una vera e propria scultura tessile: ogni modello prende vita dall'incontro tra la disciplina del nodo e la personalità di chi lo indosserà.
          </p>
        </div>

        {/* Riquadro Citazione */}
        <div className="bg-sabbia/30 border-l-2 border-tortora p-6 mb-10 text-sm sm:text-base leading-relaxed text-moka italic font-serif">
          "La perfezione industriale è replicabile ovunque. Il valore di un manufatto artigianale risiede nel tempo irripetibile che gli viene dedicato."
        </div>

        {/* Icone Social e Contatti */}
        <div className="flex items-center gap-6 text-moka pt-2">
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
            href="mailto:info@actjtude.com" 
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
  );
}