import Navbar from '../components/Navbar';
import ProductGallery from '../components/ProductGallery';

export default function Catalog() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <ProductGallery />
      </main>
    </div>
  );
}