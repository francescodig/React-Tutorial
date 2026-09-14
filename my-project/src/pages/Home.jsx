import { Link } from 'react-router-dom';
import PromoBanner from '../components/PromoBanner';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StorySnippet from '../components/StorySnippet';
import FeaturesBar from '../components/FeaturesBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <PromoBanner />
      <Navbar />
      <main>
        <HeroSection />
        <div className="text-center my-10">
          <Link to="/catalogo" className="bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors tracking-wide">
            Vai al catalogo
          </Link>
        </div>
        <StorySnippet />
        <FeaturesBar />
      </main>
    </div>
  );
}