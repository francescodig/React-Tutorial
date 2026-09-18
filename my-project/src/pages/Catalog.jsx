import ProductGallery from '../components/ProductGallery';

export default function Catalog() {
  return (
    <div className="min-h-screen bg-calce text-carbone antialiased">
      
      {/* Contenitore principale a registro editoriale */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-24">
        
        {/* Testata Asimmetrica */}
        <header className="border-b border-sabbia pb-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-tortora font-medium">
                Archivio Modelli
              </span>
              <span className="w-8 h-px bg-sabbia"></span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight uppercase">
              Modelli &amp; <br className="hidden sm:inline" /> Intrecci
            </h1>
          </div>

          <div className="max-w-sm text-left md:text-right">
            <p className="text-xs uppercase tracking-widest text-tortora mb-2">
              Edizione Continua
            </p>
            <p className="text-moka text-sm font-light leading-relaxed">
              Volumi strutturati e filati lavorati a nodo singolo. Ogni forma funge da prototipo aperto: scegli le dimensioni e definisci l'intreccio su misura.
            </p>
          </div>
        </header>

        {/* Griglia Prodotti */}
        <main className="mb-20">
          <ProductGallery />
        </main>

        {/* Chiusura Bespoke in Palette (Niente blocchi neri) */}
        <section className="border border-sabbia bg-sabbia/20 p-8 sm:p-14 text-center max-w-4xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-tortora font-medium block mb-3">
            Creazione Dedicata
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-normal uppercase tracking-wide text-carbone mb-4">
            Un'idea non presente in collezione?
          </h2>
          <p className="text-moka text-sm font-light leading-relaxed max-w-lg mx-auto mb-8">
            Dalla scelta della sagoma metallica alla combinazione di colore del filato: realizziamo pezzi unici partendo da un disegno concordato insieme.
          </p>
          <a
            href="mailto:ordini@filiecapricci.it"
            className="inline-block border border-carbone text-carbone px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-carbone hover:text-calce transition-all duration-300"
          >
            Avvia un progetto su misura
          </a>
        </section>

      </div>
    </div>
  );
}