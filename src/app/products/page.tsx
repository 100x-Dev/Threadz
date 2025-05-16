"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductFilters from '../components/ProductFilters';
import ProductCard from '../components/ui/Card';
import { products as initialProducts, Product } from '../components/data/products';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const prices = ['all', '$0-$30', '$31-$60', '$61+'];
  const colors = ['all', 'Black', 'White', 'Gray', 'Navy', 'Olive', 'Maroon'];
  const sizes = ['all', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const filterProducts = () => {
    let filtered = [...initialProducts];

    if (selectedPrice !== 'all') {
      const [min, max] = selectedPrice
        .replace('$', '')
        .split('-')
        .map(price => parseInt(price || '1000'));
      filtered = filtered.filter(product => {
        const price = product.price;
        return price >= min && (max ? price <= max : true);
      });
    }

    if (selectedColor !== 'all') {
      filtered = filtered.filter(product =>
        product.colors.includes(selectedColor)
      );
    }

    setProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [selectedPrice, selectedColor, selectedSize]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Button */}
          <button
            className="md:hidden bg-black text-white px-4 py-2 rounded-lg mb-4"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* Filters Sidebar */}
          <motion.aside
            className={`w-full md:w-64 flex-shrink-0 ${
              isFilterOpen ? 'block' : 'hidden'
            } md:block`}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <ProductFilters
              prices={prices}
              colors={colors}
              sizes={sizes}
              selectedPrice={selectedPrice}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              onPriceChange={setSelectedPrice}
              onColorChange={setSelectedColor}
              onSizeChange={setSelectedSize}
            />
          </motion.aside>

          {/* Products Grid */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedPrice}-${selectedColor}-${selectedSize}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            </AnimatePresence>

            {products.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-gray-500 text-lg">
                  No products found with the selected filters.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;