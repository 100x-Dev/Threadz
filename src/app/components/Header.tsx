"use client"
import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, User } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm py-5'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <a
                        href="/"
                        className={`font-bold text-2xl tracking-tight transition-colors ${isScrolled ? 'text-black' : 'text-white'
                            }`}
                    >
                        THREADZ
                    </a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a
                        href="#hoodies"
                        className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white/90 hover:text-white'
                            }`}
                    >
                        Hoodies
                    </a>
                    <a
                        href="#tshirts"
                        className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white/90 hover:text-white'
                            }`}
                    >
                        T-Shirts
                    </a>
                    <a
                        href="#new"
                        className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white/90 hover:text-white'
                            }`}
                    >
                        New Arrivals
                    </a>
                    <a
                        href="#about"
                        className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white/90 hover:text-white'
                            }`}
                    >
                        About
                    </a>
                </nav>

                <div className="flex items-center space-x-5">
                    <button
                        className={`hidden md:flex items-center text-sm font-medium transition-colors ${isScrolled ? 'text-gray-900 hover:text-gray-600' : 'text-white/90 hover:text-white'
                            }`}
                    >
                        <User size={20} className="mr-1" />
                        <span>Account</span>
                    </button>
                    <button
                        className={`flex items-center relative ${isScrolled ? 'text-gray-900' : 'text-white'
                            }`}
                    >
                        <ShoppingBag size={20} />
                        <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                            0
                        </span>
                    </button>
                    <button
                        className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'
                            }`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg">
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        <a href="#hoodies" className="text-sm font-medium py-2">Hoodies</a>
                        <a href="#tshirts" className="text-sm font-medium py-2">T-Shirts</a>
                        <a href="#new" className="text-sm font-medium py-2">New Arrivals</a>
                        <a href="#about" className="text-sm font-medium py-2">About</a>
                        <a href="#account" className="text-sm font-medium py-2 flex items-center">
                            <User size={18} className="mr-2" />
                            Account
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;