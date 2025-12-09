import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import AdminPanel from './components/AdminPanel';
import Features from './components/Features';
import Ecosystem from './components/Ecosystem';
import Testimonials from './components/Testimonials';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <Hero />
        <PainPoints />
        <Solution />
        <AdminPanel />
        <Features />
        <Ecosystem />
        <Testimonials />
        <Comparison />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
