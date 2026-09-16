export default function ProductCard({ product, onClick }) {
  return (
    <div className="flex flex-col group cursor-pointer" onClick={onClick}>
      <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 transition-transform duration-300 group-hover:scale-105 shadow-sm">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="mt-3 flex flex-col gap-1">
        {/* Riga superiore: Nome a sinistra, Prezzo a destra */}
        <div className="flex justify-between items-baseline gap-2">
          <h3 className="text-gray-900 font-medium text-base truncate">{product.name}</h3>
          <span className="text-gray-900 font-semibold text-sm whitespace-nowrap">{product.price}</span>
        </div>
        
        {/* Riga inferiore: Invito all'azione discreto */}
        <div className="flex items-center text-xs text-gray-400 uppercase tracking-widest group-hover:text-blue-900 transition-colors">
          <span>Scopri</span>
          <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">➔</span>
        </div>
      </div>
    </div>
  );
}