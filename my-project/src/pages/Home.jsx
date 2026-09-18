import { Link } from 'react-router-dom';

export default function Home() {
  const galleryImages = [
    { id: 1, src: '/images/borsa1.jpeg', title: 'Clic Clac Intreccio' },
    { id: 2, src: '/images/borsa2.jpeg', title: 'Ava Bag' },
    { id: 3, src: '/images/borsa3.jpeg', title: 'Tote Bag Estiva' },
    { id: 4, src: '/images/borsa4.jpeg', title: 'Pochette Sera' },
  ];

  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <div className="bg-[#F9F8F6] text-[#181615] antialiased">
      
      {/* 1. HERO CON SFONDO A FOTO INTERA */}
      <section className="relative min-h-[calc(100svh-4rem)] flex items-center justify-center overflow-hidden">
        <img
            src="/images/sfondo.jpeg"
            alt="Borse artigianali Fili e Capricci"
            className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
            loading="eager"
        />
        
        <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center text-white space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-neutral-300 block">
            Atelier di pelletteria artigianale
          </span>

          <h1 className="font-serif text-5xl sm:text-7xl font-normal leading-[1.05] tracking-tight">
            L'arte dell'uncinetto, <br />
            <span className="italic font-light">forma contemporanea.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-200 max-w-xl mx-auto leading-relaxed font-light">
            Pezzi unici nati da una lavorazione lenta. Ogni borsa è realizzata su ordinazione per durare nel tempo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/catalogo"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-full text-xs uppercase tracking-widest font-medium bg-white text-neutral-950 hover:bg-neutral-100 transition-colors duration-200 shadow-lg"
            >
              Esplora la Collezione
            </Link>
            <a
              href="mailto:ordini@filiecapricci.it"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-full text-xs uppercase tracking-widest font-medium border border-white/40 text-white hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm"
            >
              Richiedi su Misura
            </a>
          </div>
        </div>
      </section>

        {/* 2. IL VALORE ARTIGIANALE */}
      <section className="bg-[#F2EFE9] border-y border-[#E5DFD5] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* I tre pilastri */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#7C7267] font-semibold block mb-2">01</span>
              <h3 className="font-serif text-2xl font-normal mb-3">Lavorazione Lenta</h3>
              <p className="text-sm text-[#524B44] leading-relaxed">
                Nessuna catena industriale. Ogni trama richiede ore di intreccio manuale per assicurare struttura e consistenza.
              </p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#7C7267] font-semibold block mb-2">02</span>
              <h3 className="font-serif text-2xl font-normal mb-3">Creazioni su Misura</h3>
              <p className="text-sm text-[#524B44] leading-relaxed">
                I modelli sono punti di partenza. Puoi scegliere filati, varianti cromatiche e proporzioni in base al tuo stile.
              </p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#7C7267] font-semibold block mb-2">03</span>
              <h3 className="font-serif text-2xl font-normal mb-3">Minuteria Selezionata</h3>
              <p className="text-sm text-[#524B44] leading-relaxed">
                Catene rinforzate, chiusure a scatto e dettagli metallici scelti per mantenere brillantezza e resistenza nel tempo.
              </p>
            </div>
          </div>

          {/* Bottone centrale */}
          <div className="mt-14 text-center">
            <Link
              to="/aboutme"
              className="inline-flex justify-center items-center px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-medium border border-[#181615] text-[#181615] hover:bg-[#181615] hover:text-[#F9F8F6] transition-colors duration-200"
            >
              About Me
            </Link>
          </div>

        </div>
      </section>

      {/* 3. GALLERY DINAMICA A SCORRIMENTO AUTOMATICO */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#7C7267] font-medium block mb-2">Lookbook</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal">Sguardi sulla collezione</h2>
          </div>
          <Link to="/catalogo" className="text-xs uppercase tracking-widest font-semibold text-[#181615] hover:opacity-60 transition-opacity">
            Vedi tutti i modelli ➔
          </Link>
        </div>

        <div className="w-full overflow-hidden">
          <div className="animate-marquee flex gap-6">
            {duplicatedImages.map((item, index) => (
              <div key={`${item.id}-${index}`} className="w-[300px] sm:w-[380px] flex-shrink-0 group cursor-pointer">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#EFECE6] mb-4 shadow-sm">
                <Link to="/catalogo" className="w-full h-full block">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </Link>
                </div>
                <h4 className="font-serif text-lg font-medium text-[#181615]">{item.title}</h4>
                <p className="text-xs text-[#7C7267] uppercase tracking-wider mt-0.5">Pezzo artigianale</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}