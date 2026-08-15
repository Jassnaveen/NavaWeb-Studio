import { useState } from 'react';
import Loader from '@/components/Loader';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import WhyNavaWeb from '@/components/WhyNavaWeb';
import AIWorkflow from '@/components/AIWorkflow';
import Portfolio from '@/components/Portfolio';
import FeaturedProject from '@/components/FeaturedProject';
import MaduraiIdentity from '@/components/MaduraiIdentity';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative min-h-screen bg-ink-950">
      <Loader onComplete={() => setLoaded(true)} />
      <CustomCursor />
      {loaded && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <Services />
            <WhyNavaWeb />
            <AIWorkflow />
            <Portfolio />
            <FeaturedProject />
            <MaduraiIdentity />
            <Pricing />
            <Process />
            <Testimonials />
            <About />
            <FinalCTA />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
