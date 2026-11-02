import { useState } from 'react';
import ProductGallery from '../components/ProductGallery';

export default function Catalog() {
  // Stato per la modale e il form
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    idea: '',
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  // Gestione dell'input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Reset e chiusura modale
  const closeModal = () => {
    setIsModalOpen(false);
    setStatus({ loading: false, success: false, error: null });
    setFormData({ name: '', email: '', phone: '', idea: '' });
  };

  // Invio del form al bot Telegram
  const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus({ loading: true, success: false, error: null });

  try {
    const response = await fetch('/api/send-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'custom', 
        prodotto: 'Progetto Su Misura / Idea Personalizzata',
        name: formData.name,
        email: formData.email,
        message: formData.idea,
      }),
    });

      // Legge la risposta come testo per evitare crash in caso di corpo vuoto
      const responseText = await response.text();
      const data = responseText ? JSON.parse(responseText) : {};

      if (response.ok && data.success) {
        setStatus({ loading: false, success: true, error: null });
      } else {
        throw new Error(data.error || `Errore del server (Status ${response.status})`);
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <div className="min-h-screen bg-calce text-carbone antialiased relative">
      
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

        {/* Banner Visione su misura */}
        <section className="border border-sabbia bg-sabbia/20 p-8 sm:p-14 text-center max-w-4xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-tortora font-medium block mb-3">
            Visione su misura
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-normal uppercase tracking-wide text-carbone mb-4">
            Non trovi la forma perfetta?
          </h2>
          <p className="text-moka text-sm font-light leading-relaxed max-w-lg mx-auto mb-8">
            L'artigianato non ha limiti di catalogo. Se hai in mente un design specifico, un volume diverso o un abbinamento di colori particolare, possiamo progettare e realizzare un modello interamente nuovo, partendo da zero.
          </p>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-block border border-carbone text-carbone px-8 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-carbone hover:text-calce transition-all duration-300 cursor-pointer"
          >
            Raccontami la tua idea
          </button>
        </section>

      </div>

      {/* MODALE FORM IDEA PERSONALIZZATA */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-carbone/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-calce border border-sabbia p-8 sm:p-10 max-w-lg w-full shadow-2xl relative text-left">
            
            {/* Tasto chiusura */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-tortora hover:text-carbone text-xl p-2 transition-colors"
              aria-label="Chiudi modale"
            >
              ✕
            </button>

            <span className="text-[10px] uppercase tracking-[0.3em] text-tortora font-medium block mb-2">
              Progetto Personalizzato
            </span>
            <h3 className="font-display text-2xl font-normal uppercase tracking-wide text-carbone mb-6">
              Raccontami la tua idea
            </h3>

            {status.success ? (
              <div className="text-center py-8 space-y-4">
                <p className="text-sm text-carbone font-medium">
                  ✨ Messaggio inviato con successo!
                </p>
                <p className="text-xs text-moka leading-relaxed">
                  Grazie per aver condiviso la tua visione. Ti risponderò al più presto per valutare insieme la fattibilità del progetto.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-4 border border-carbone text-carbone px-6 py-2 text-xs uppercase tracking-widest font-medium hover:bg-carbone hover:text-calce transition-all"
                >
                  Chiudi
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-tortora mb-1 font-medium">
                    Nome e Cognome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Il tuo nome"
                    className="w-full bg-calce border border-sabbia px-3 py-2 text-sm text-carbone focus:outline-none focus:border-carbone transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-tortora mb-1 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nome@email.com"
                      className="w-full bg-calce border border-sabbia px-3 py-2 text-sm text-carbone focus:outline-none focus:border-carbone transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-tortora mb-1 font-medium">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+39 ..."
                      className="w-full bg-calce border border-sabbia px-3 py-2 text-sm text-carbone focus:outline-none focus:border-carbone transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-tortora mb-1 font-medium">
                    Descrizione del Progetto *
                  </label>
                  <textarea
                    name="idea"
                    required
                    rows={4}
                    value={formData.idea}
                    onChange={handleChange}
                    placeholder="Descrivi la forma, i colori, le dimensioni o l'ispirazione..."
                    className="w-full bg-calce border border-sabbia px-3 py-2 text-sm text-carbone focus:outline-none focus:border-carbone transition-colors resize-none"
                  />
                </div>

                {status.error && (
                  <p className="text-xs text-red-600 font-light">
                    ⚠️ {status.error}
                  </p>
                )}

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-5 py-2.5 text-xs uppercase tracking-widest text-tortora hover:text-carbone transition-colors"
                  >
                    Annulla
                  </button>
                  <button
                    type="submit"
                    disabled={status.loading}
                    className="border border-carbone text-carbone px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-carbone hover:text-calce transition-all disabled:opacity-50"
                  >
                    {status.loading ? 'Invio in corso...' : 'Invia Idea'}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}