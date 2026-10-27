import { useState } from 'react';

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const images = product.images || (product.image ? [product.image] : []);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Inoltra i dati alla funzione Serverless di Cloudflare Pages (/api/send-order)
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prodotto: product.name,
          prezzo: product.price,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Errore durante l'invio dell'ordine:", error);
      setStatus('error');
    }
  };

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
              <img 
                src={images[currentIndex]} 
                alt={`${product.name} - Vista ${currentIndex + 1}`} 
                className="w-full h-full object-cover transition-all duration-500 ease-in-out" 
              />

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

        {/* SEZIONE DETTAGLI / FORM (Destra) */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between overflow-y-auto">
          {status === 'success' ? (
            <div className="my-auto text-center space-y-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-serif text-gray-900">Richiesta Inviata!</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Grazie per il tuo interesse. Ti risponderemo il prima possibile all'indirizzo email indicato.
              </p>
              <button
                onClick={onClose}
                className="mt-6 w-full bg-gray-900 text-white py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition-colors shadow-md"
              >
                Chiudi
              </button>
            </div>
          ) : showForm ? (
            <div className="flex flex-col h-full justify-between">
              <div>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-xs uppercase tracking-widest text-gray-400 hover:text-gray-900 mb-4 transition-colors flex items-center gap-1 font-medium"
                >
                  ← Torna ai dettagli
                </button>
                
                <h3 className="text-2xl font-serif text-gray-900 mb-1">Richiedi {product.name}</h3>
                <p className="text-xs text-gray-500 mb-4">Compila i tuoi dati per inviare l'ordine d'acquisto.</p>

                <form id="order-form" onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-600 font-semibold mb-1">
                      Nome e Cognome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="es. Maria Rossi"
                      className="w-full text-sm border border-gray-200 rounded-md p-2.5 focus:outline-none focus:border-gray-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-600 font-semibold mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="es. maria@example.com"
                      className="w-full text-sm border border-gray-200 rounded-md p-2.5 focus:outline-none focus:border-gray-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-600 font-semibold mb-1">
                      Telefono (opzionale)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="es. +39 333 1234567"
                      className="w-full text-sm border border-gray-200 rounded-md p-2.5 focus:outline-none focus:border-gray-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-gray-600 font-semibold mb-1">
                      Note o Personalizzazioni
                    </label>
                    <textarea
                      name="message"
                      rows="2"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specifiche su colori, catena o tempi..."
                      className="w-full text-sm border border-gray-200 rounded-md p-2.5 focus:outline-none focus:border-gray-900 transition-colors resize-none"
                    ></textarea>
                  </div>
                </form>

                {status === 'error' && (
                  <p className="text-xs text-red-500 mt-2 font-medium">
                    Si è verificato un errore durante l'invio. Riprova più tardi.
                  </p>
                )}
              </div>

              <button
                type="submit"
                form="order-form"
                disabled={status === 'submitting'}
                className="w-full mt-4 text-center bg-gray-900 text-white py-3.5 rounded-md font-medium text-base hover:bg-gray-800 transition-colors shadow-md disabled:opacity-50"
              >
                {status === 'submitting' ? 'Invio in corso...' : 'Invia Ordine'}
              </button>
            </div>
          ) : (
            <>
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
                onClick={() => setShowForm(true)}
                className="w-full block text-center bg-gray-900 text-white py-4 rounded-md font-medium text-lg hover:bg-gray-800 transition-colors shadow-md"
              >
                Richiedi questa borsa
              </button>
            </>
          )}
        </div>

      </div>
    </div>
  );
}