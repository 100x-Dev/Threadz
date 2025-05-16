"use client"
import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        title: "Premium Comfort",
        subtitle: "Fall/Winter Collection 2025",
        description: "Elevate your style with our limited edition hoodies and tees",
        cta: "Shop Collection",
        image: "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        id: 2,
        title: "Essentials",
        subtitle: "Everyday Basics",
        description: "Timeless designs crafted with sustainable materials",
        cta: "Explore Basics",
        image: "https://images.pexels.com/photos/6347546/pexels-photo-6347546.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
        id: 3,
        title: "Limited Edition",
        subtitle: "Artist Collaborations",
        description: "Unique designs from the world's leading artists",
        cta: "View Collection",
        image: "https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState<'next' | 'prev'>('next');

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setDirection('next');
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setDirection('prev');
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative h-screen w-screen bg-black overflow-hidden">
            {/* Main content */}
            <div className="flex flex-col lg:flex-row w-full h-full relative">
                {/* Left Panel - Content */}
                <div className="absolute top-0 left-0 w-full h-full z-20 lg:static lg:w-2/5 lg:z-10 flex items-start pt-16 lg:items-center lg:pt-0">
                    <div className="w-full px-2 pt-4 pb-8 flex flex-col items-start justify-start lg:px-16 lg:py-12 lg:bg-black/70 bg-transparent">
                        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md text-center break-words mx-auto">
                            {slides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`absolute inset-0 px-8 flex items-center transition-all duration-700 ${index === currentSlide
                                        ? 'opacity-100 translate-y-0'
                                        : direction === 'next'
                                            ? 'opacity-0 translate-y-full'
                                            : 'opacity-0 -translate-y-full'
                                        }`}
                                >
                                    <div className="w-full max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                                        <h2 className="text-white text-sm lg:text-base uppercase tracking-[0.2em] mb-4 font-light break-words drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                            {slide.subtitle}
                                        </h2>
                                        <h1 className="text-white text-3xl sm:text-4xl lg:text-7xl xl:text-8xl font-bold leading-none mb-6 break-words drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                            {slide.title}
                                        </h1>
                                        <p className="text-white/90 text-base mb-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-md lg:mx-0 break-words drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                            {slide.description}
                                        </p>
                                        <div className="flex items-center gap-6 justify-center lg:justify-start">
                                            <Button
                                                size="lg"
                                                className="bg-white text-black hover:bg-white/90"
                                            >
                                                {slide.cta}
                                            </Button>
                                            <div className="hidden lg:flex items-center gap-4">
                                                <button
                                                    onClick={handlePrev}
                                                    className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                                                >
                                                    <ChevronLeft className="w-6 h-6 text-white" />
                                                </button>
                                                <button
                                                    onClick={handleNext}
                                                    className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                                                >
                                                    <ChevronRight className="w-6 h-6 text-white" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Panel - Images */}
                <div className="w-full lg:w-3/5 h-full relative">
                    <div className="absolute inset-0 lg:bg-gradient-to-l lg:from-transparent lg:to-black/50 z-10" />

                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-all duration-700 ${index === currentSlide
                                ? 'opacity-100 scale-100'
                                : direction === 'next'
                                    ? 'opacity-0 scale-110'
                                    : 'opacity-0 scale-90'
                                }`}
                        >
                            <div className="w-full h-[80vh] md:h-[85vh] lg:h-full flex items-center justify-center overflow-hidden">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-8 right-8 z-20 hidden lg:flex items-center gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentSlide ? 'next' : 'prev');
                                setCurrentSlide(index);
                            }}
                            className="group"
                        >
                            <div className={`h-0.5 w-8 relative overflow-hidden ${index === currentSlide ? 'bg-white' : 'bg-white/30'}`}>
                                {index === currentSlide && (
                                    <div
                                        className="absolute inset-0 bg-white origin-left"
                                        style={{
                                            animation: 'progress 6s linear'
                                        }}
                                    />
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;