import Header from './components/Header';
import Hero from './components/Hero';
import ScrollVelocity from './components/ui/ScrollVelocity';
import FeaturedProducts from './components/FeaturedProducts';
import ProductShowcase from './components/ProductShowcase';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-8">
          <Hero />
          <ScrollVelocity baseVelocity={50} className="w-full text-4xl font-bold whitespace-nowrap py-4">
            Premium Comfort — Essentials — Limited Edition — Premium Comfort — Essentials —
          </ScrollVelocity>
          <ScrollVelocity baseVelocity={-50} className="w-full text-4xl font-bold whitespace-nowrap py-4">
            Sustainable Materials — Unique Designs — Timeless Style — Sustainable Materials —
          </ScrollVelocity>
          <FeaturedProducts />
          <ProductShowcase />
          <NewsLetter />
        </main>
      </div>
      <Footer />
    </>
  );
}