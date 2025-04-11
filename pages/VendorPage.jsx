import VendorList from '../components/VendorList';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const VendorPage = () => {
  return (
    <div>
      <section className="hero-section">
        <h1>Find Top Vendors Near You</h1>
        <p>Discover and book the best venues, caterers, and entertainers in your area.</p>
        <button className="btn btn-primary">Explore Now</button>
      </section>
      <VendorList />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default VendorPage;
