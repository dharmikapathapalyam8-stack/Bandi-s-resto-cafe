import About from './components/About';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Location from './components/Location';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Reviews from './components/Reviews';
import WhyChooseUs from './components/WhyChooseUs';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#12110F] text-[#FAF6F0]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <WhyChooseUs />
        <Menu />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
