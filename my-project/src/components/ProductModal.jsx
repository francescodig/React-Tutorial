export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const emailDestinazione = "ordini@filiecapricci.it";
  const oggetto = encodeURIComponent(`Richiesta info: ${product.name}`);
  const corpo = encodeURIComponent(
    `Ciao Mara,\n\nvorrei ordinare il modello "${product.name}".\nPossiamo definire insieme i dettagli e i colori?\n\nGrazie!`
  );
  const mailtoLink = `mailto:${emailDestinazione}?subject=${oggetto}&body=${corpo}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full relative overflow-hidden flex flex-col md:flex-row h-[80vh] md:h-auto max-h-[600px]">
        
        {/* Pulsante di chiusura (X) posizionato in alto a destra */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 text-gray-500 hover:text-black shadow-sm"
          aria-label="Chiudi finestra"
        >
          ✕
        </button>

        {/* Sezione immagine (occupa metà spazio su desktop) */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Sezione dettagli testuali */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-2">{product.name}</h2>
            <p className="text-sm text-pink-500 uppercase tracking-widest font-semibold mb-6">
              Su Ordinazione
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 mb-6">
              <p><strong>Tempi di realizzazione:</strong> Circa 10-15 giorni lavorativi.</p>
              <p><strong>Personalizzazione:</strong> Colori e dettagli concordabili via email.</p>
              <p><strong>Prezzo:</strong> {product.price}</p>
            </div>
          </div>

          <a 
            href={mailtoLink}
            className="w-full block text-center bg-gray-900 text-white py-4 rounded-md font-medium text-lg hover:bg-gray-800 transition-colors shadow-md"
          >
            Richiedi questa borsa
          </a>
        </div>

      </div>
    </div>
  );
}