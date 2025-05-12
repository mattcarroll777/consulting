import Header from '@/components/Header';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-12 flex justify-center bg-black text-white">
      <div className="w-full max-w-3xl space-y-20">
        <Header />
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
