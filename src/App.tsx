import { Anatomy } from './components/Anatomy';
import { Clinical } from './components/Clinical';
import { Closing } from './components/Closing';
import { Comfort } from './components/Comfort';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Materials } from './components/Materials';
import { Purpose } from './components/Purpose';
import { Research } from './components/Research';
import { useReveal } from './components/useReveal';

export default function App() {
  useReveal();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Purpose />
        <HowItWorks />
        <Anatomy />
        <Clinical />
        <Comfort />
        <Materials />
        <Research />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
