import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import products from '../products.json';

export default function ProductGallery() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {products.map((product) => (
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