"use client"
import React, { useState } from 'react';
import ProductCard from './ui/Card';
import { products, Product } from './data/products';
import { motion } from 'framer-motion';

type Category = 'all' | 'hoodie' | 'tshirt';

const ProductShowcase = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('all');

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(product => product.category === activeCategory);

    const categories: { value: Category; label: string }[] = [
        { value: 'all', label: 'All Products' },
        { value: 'hoodie', label: 'Hoodies' },
        { value: 'tshirt', label: 'T-Shirts' }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="products">
            <div className="w-full px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                        Shop Our Collection
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Crafted with premium materials and designed for everyday comfort.
                        Our products are made to last and styled for the modern wardrobe.
                    </p>
                </motion.div>

                {/* Category filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center mb-16"
                >
                    <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
                        {categories.map((category) => (
                            <button
                                key={category.value}
                                className={`relative px-8 py-3 text-sm font-medium rounded-full transition-all duration-300 ${activeCategory === category.value
                                        ? 'text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                onClick={() => setActiveCategory(category.value)}
                            >
                                {activeCategory === category.value && (
                                    <motion.div
                                        layoutId="activeCategory"
                                        className="absolute inset-0 bg-black rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{category.label}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Products grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full"
                >
                    {filteredProducts.map((product: Product, index: number) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty state */}
                {filteredProducts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <p className="text-gray-500 text-lg">No products found in this category.</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ProductShowcase;