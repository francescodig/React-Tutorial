import ProductGallery from '../components/ProductGallery';

export default function Catalog() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#181615] antialiased">
      
      {/* Intestazione Editoriale con ancoraggio visivo */}
      <header className="relative pt-24 pb-16 px-6 text-center max-w-3xl mx-auto">
        {/* Linea verticale decorativa per spezzare il vuoto */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-[#E5DFD5]"></div>
        
        <span className="text-xs uppercase tracking-[0.25em] text-[#7C7267] font-medium block mb-4 mt-6">
          La Collezione
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight mb-6">
          Modelli e Intrecci
        </h1>
        <p className="text-[#524B44] text-base leading-relaxed font-light">
          Esplora le forme e i volumi delle nostre creazioni. Ogni modello funge da base di partenza per la tua borsa su misura, realizzata a mano scegliendo il filato e i dettagli metallici che preferisci.
        </p>
      </header>

      {/* Contenitore della Galleria */}
      <main className="pb-12">
        <ProductGallery />
      </main>
      
      {/* Sezione Call to Action - Blocco a contrasto scuro */}
      <section className="bg-[#181615] text-[#F9F8F6] py-24 px-6 mt-12 border-t border-[#2A2624]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A69C91] font-medium block mb-4">
            Visione su Misura
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal mb-6">
            Non trovi la forma perfetta?
          </h2>
          <p className="text-[#D3CBC0] text-base leading-relaxed font-light max-w-xl mb-10">
            L'artigianato non ha limiti di catalogo. Se hai in mente un design specifico, un volume diverso o un abbinamento di colori particolare, possiamo progettare e realizzare un modello interamente nuovo, partendo da zero.
          </p>
          <a 
            href="mailto:ordini@filiecapricci.it"
            className="inline-flex justify-center items-center px-10 py-4 rounded-full text-xs uppercase tracking-widest font-medium bg-[#F9F8F6] text-[#181615] hover:bg-[#E5DFD5] transition-colors duration-300 shadow-lg"
          >
            Raccontami la tua idea
          </a>
        </div>
      </section>
      
    </div>
  );
}