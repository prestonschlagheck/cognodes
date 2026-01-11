import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Ventures from './components/Ventures';
import WhyUs from './components/WhyUs';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Ventures />
        <WhyUs />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
