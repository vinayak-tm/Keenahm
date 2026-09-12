import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyKeenahm from '@/components/WhyKeenahm';
import BeforeAfter from '@/components/BeforeAfter';
import ServiceAreas from '@/components/ServiceAreas';
import Financing from '@/components/Financing';
import CostEstimator from '@/components/CostEstimator';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="bg-[#0B192C] min-h-screen">
      <Header />
      <main className="pb-16 lg:pb-0">
        <Hero />
        <Services />
        <WhyKeenahm />
        <BeforeAfter />
        <ServiceAreas />
        <Financing />
        <CostEstimator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
