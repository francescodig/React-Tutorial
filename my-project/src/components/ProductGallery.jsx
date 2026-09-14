import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const DUMMY_PRODUCTS = [
  { 
    id: 1, 
    name: 'Clic Clac Intreccio', 
    image: '/images/borsa1.jpeg',
    description: 'Una borsa dallo stile vintage con chiusura metallica clic-clac. L\'intreccio fitto garantisce struttura e resistenza, perfetta per dare un tocco retrò ai tuoi outfit quotidiani.'
  },
  { 
    id: 2, 
    name: 'Ava Bag', 
    image: '/images/borsa2.jpeg',
    description: 'Linee morbide e capienza sorprendente. La Ava Bag è la compagna ideale per chi cerca una borsa da giorno pratica ma con l\'eleganza inconfondibile della lavorazione artigianale.'
  },
  { 
    id: 3, 
    name: 'Tote Bag Estiva', 
    image: '/images/borsa3.jpeg',
    description: 'Ampia, leggera e resistente. Realizzata con filati perfetti per la stagione calda, ideale per le passeggiate in spiaggia o per lo shopping in città.'
  },
  { 
    id: 4, 
    name: 'Pochette Sera', 
    image: '/images/borsa4.jpeg',
    description: 'Piccola e preziosa. Un accessorio minimale progettato per contenere l\'essenziale durante le tue serate eleganti.'
  }
];

export default function ProductGallery() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-serif text-gray-900 mb-4">
        Scegli il modello, poi rendilo tuo
      </h2>
      <p className="text-gray-700 mb-10 max-w-2xl leading-relaxed">
        Scopri i modelli che posso realizzare su ordinazione. 
        Clicca sulla borsa che ami di più per scoprirne i dettagli e personalizzarla.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {DUMMY_PRODUCTS.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={() => setSelectedProduct(product)} 
          />
        ))}
      </div>

      {/* Renderizza il modale solo se c'è un prodotto selezionato */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
}