import Hero from '../components/hero';
import CategoriesSection from '../components/CategoriesSection';
import FeaturedVendors from '../components/FeaturedVendors';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Hero />

      <CategoriesSection />

      <section className="flex justify-center mt-8">
        <Link
          to="/vendors"
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
        >
          Explore Vendors
        </Link>
      </section>

      <FeaturedVendors />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
