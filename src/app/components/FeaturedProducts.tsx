"use client"
import { useState, useRef } from 'react';
import FeaturedProduct from './FeaturedProduct';


// Sample product data
const products = [
  {
    id: 'product-1',
    name: 'Premium Comfort Hoodie',
    description: 'Soft cotton blend, perfect for everyday wear',
    price: 89.99,
    images: [
      'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/6347546/pexels-photo-6347546.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ]
  },
  {
    id: 'product-2',
    name: 'Essential Tee',
    description: 'Lightweight cotton, classic fit',
    price: 39.99,
    images: [
      'https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/6311386/pexels-photo-6311386.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ]
  },
  {
    id: 'product-3',
    name: 'Urban Cargo Pants',
    description: 'Durable and stylish with multiple pockets',
    price: 79.99,
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ]
  },
  {
    id: 'product-4',
    name: 'Minimalist Jacket',
    description: 'Lightweight and water-resistant',
    price: 129.99,
    images: [
      'https://images.pexels.com/photos/6770028/pexels-photo-6770028.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/6769988/pexels-photo-6769988.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ]
  },
  {
    id: 'product-5',
    name: 'Graphic Print Sweatshirt',
    description: 'Bold designs on premium fabric',
    price: 69.99,
    images: [
      'https://images.pexels.com/photos/5868738/pexels-photo-5868738.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/5868739/pexels-photo-5868739.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ]
  },
  {
    id: 'product-6',
    name: 'Slim Fit Jeans',
    description: 'Comfortable stretch denim, modern cut',
    price: 59.99,
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ]
  },
  {
    id: 'product-7',
    name: 'Casual Sneakers',
    description: 'Lightweight and comfortable all-day wear',
    price: 89.99,
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ]
  }
];

const FeaturedProducts = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardWidth = 300; // Width of each card in pixels
  const scrollAmount = cardWidth + 16; // Card width + gap

  const scrollLeft = () => {
    if (carouselRef.current) {
      const newPosition = Math.max(0, scrollPosition - scrollAmount);
      carouselRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      const newPosition = Math.min(maxScroll, scrollPosition + scrollAmount);
      carouselRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header - centered */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">Featured Products</h2>
          <p className="text-gray-800 text-lg max-w-2xl mx-auto">
            Discover our latest collection of premium apparel designed for style and comfort.
          </p>
        </div>

        {/* Navigation controls */}
        <div className="flex justify-end items-center mb-6">
          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable product carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto hide-scrollbar gap-6 pb-4"
          style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Featured product */}
          <div className="min-w-[300px] w-[300px] flex-shrink-0">
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full">
              <div className="aspect-[3/4] relative overflow-hidden">
                <div
                  className="w-full h-full absolute inset-0"
                  style={{
                    backgroundImage: `url(${products[0].images[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.7s ease-in-out'
                  }}
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  FEATURED
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{products[0].name}</h3>
                <p className="text-gray-600 text-sm mb-2">{products[0].description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">${products[0].price.toFixed(2)}</span>
                  <button className="bg-black hover:bg-gray-800 text-white rounded-full p-2 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Other products */}
          {products.slice(1).map(product => (
            <div
              key={product.id}
              className="min-w-[300px] w-[300px] flex-shrink-0"
            >
              <FeaturedProduct product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Add custom CSS to hide scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;
