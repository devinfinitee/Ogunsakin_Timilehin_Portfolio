import AboutSection from './components/AboutSection';
import CareerSection from './components/CareerSection';
import ContactSection from './components/ContactSection';
import Cursor from './components/Cursor';
import HealthSection from './components/HealthSection';
import HeroParticles from './components/HeroParticles';
import HeroSection from './components/HeroSection';
import InnovationsSection from './components/InnovationsSection';
import NavBar from './components/NavBar';
import PersonalSection from './components/PersonalSection';
import ScrollProgress from './components/ScrollProgress';
import SiteFooter from './components/SiteFooter';
import TechSection from './components/TechSection';
import TickerBar from './components/TickerBar';
import usePortfolioEffects from './hooks/usePortfolioEffects';

function App() {
  usePortfolioEffects();

  return (
    <>
      <HeroParticles />
      <main className="relative z-20 w-full overflow-x-hidden">
        <Cursor />
        <ScrollProgress />
        <NavBar />
        <HeroSection />
        <TickerBar />
        <AboutSection />
        <TechSection />
        <HealthSection />
        <InnovationsSection />
        <CareerSection />
        <PersonalSection />
        {/* <DomainSection /> */}
        <ContactSection />
        <SiteFooter />
      </main>
    </>
  );
}

export default App;
