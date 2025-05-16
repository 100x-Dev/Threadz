"use client"
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {/* Company Info */}
                    <div>
                        <h3 className="font-bold text-xl mb-4">THREADZ</h3>
                        <p className="text-gray-600 mb-4">
                            Premium quality clothing designed for comfort and style. Sustainably made for the modern wardrobe.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-black transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-black transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-black transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-black transition-colors">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Shop</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Hoodies</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">T-Shirts</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">New Arrivals</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Best Sellers</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Sale</a></li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Help</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">FAQs</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Shipping & Returns</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Size Guide</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Contact Us</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Track Order</a></li>
                        </ul>
                    </div>

                    {/* About */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">About</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Our Story</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Sustainability</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Press</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-600 text-sm order-2 md:order-1 mt-4 md:mt-0">
                            &copy; {new Date().getFullYear()} THREADZ. All rights reserved.
                        </p>
                        <div className="flex space-x-6 order-1 md:order-2">
                            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Terms of Service</a>
                            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Privacy Policy</a>
                            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;