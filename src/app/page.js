// file: app/page.js
import HeroSection from './components/HeroSection';
import WorksSlider from './components/WorksSlider';
import ServicesSection from './components/ServicesSection';
import ForWhomSection from './components/ForWhomSection';
import ExampleSection from './components/ExampleSection';
import AppointmentsSection from './components/AppointmentsSection';
import OfferSection from './components/OfferSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorksSlider />
      <ServicesSection />
      <ForWhomSection />
      <ExampleSection />
      <AppointmentsSection />
      <OfferSection />
    </>
  );
}