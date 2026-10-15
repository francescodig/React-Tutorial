import { useState, useEffect, useRef } from 'react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  // Se 'images' è un array lo usa, altrimenti crea un array con la singola 'image'
  const images = product.images || (product.image ? [product.image] : []);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef(null);

  // Funzione per andare alla foto successiva (gira all'infinito)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Funzione per andare alla foto precedente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const sendEmail = (productName) => {

    const subject = encodeURIComponent(`Richiesta informazioni su: ${productName}`);
    const body = encodeURIComponent(`Ciao,\n\nVorrei avere maggiori informazioni sul prodotto "${productName}".\n\nGrazie!`);
    const emailDestinazione = "info@actjtude.com";
    const mailtoLink = `mailto:${emailDestinazione}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;





  }


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full relative overflow-hidden flex flex-col md:flex-row h-[80vh] md:h-auto max-h-[600px]">
        
        {/* Pulsante Chiudi */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-20 bg-white rounded-full p-2 text-gray-500 hover:text-black shadow-sm"
          aria-label="Chiudi finestra"
        >
          ✕
        </button>

        {/* SEZIONE GALLERY (Sinistra) */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden group">
          {images.length > 0 ? (
            <>
              {/* Immagine corrente */}
              <img 
                src={images[currentIndex]} 
                alt={`${product.name} - Vista ${currentIndex + 1}`} 
                className="w-full h-full object-cover transition-all duration-500 ease-in-out" 
              />

              {/* Controlli manuali (frecce) - visibili se ci sono più foto */}
              {images.length > 1 && (
                <>
                  <button 
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md z-10 transition-colors"
                    aria-label="Foto precedente"
                  >
                    ❮
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md z-10 transition-colors"
                    aria-label="Foto successiva"
                  >
                    ❯
                  </button>

                  {/* Indicatori (pallini) in basso */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentIndex 
                            ? "bg-white scale-125" 
                            : "bg-white/50 hover:bg-white/85"
                        }`}
                        aria-label={`Vai alla foto ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
              Nessuna immagine disponibile
            </div>
          )}
        </div>

        {/* SEZIONE DETTAGLI (Destra) */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-2">{product.name}</h2>
            <p className="text-sm text-pink-500 uppercase tracking-widest font-semibold mb-6">
              Su Ordinazione
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed whitespace-pre-line mb-6">
              {product.description}
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 mb-6 space-y-2">
              <p><strong>Dettagli:</strong> {product.details}</p>
              <p><strong>Tempi di realizzazione:</strong> {product.madeTime}.</p>
              <p><strong>Prezzo:</strong> {product.price}</p>
            </div>
          </div>

          <button 
            onClick={() => {sendEmail(product.name)}}
            className="w-full block text-center bg-gray-900 text-white py-4 rounded-md font-medium text-lg hover:bg-gray-800 transition-colors shadow-md"
          >
            Richiedi questa borsa
          </button>
        </div>

      </div>
    </div>
  );
}