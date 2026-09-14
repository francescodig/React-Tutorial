export default function ProductCard({ product, onClick }) {
  return (
    <div className="flex flex-col gap-2 group cursor-pointer" onClick={onClick}>
      <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 transition-transform duration-300 group-hover:scale-105 shadow-sm">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="mt-2 text-center">
        <h3 className="text-gray-900 font-medium text-lg">{product.name}</h3>
        <span className="text-xs text-gray-500 uppercase tracking-widest mt-1 block">Scopri ➔</span>
      </div>
    </div>
  );
}