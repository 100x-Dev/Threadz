"use client"
import { useState } from 'react';
import { cn } from '../lib/utils';

interface FeaturedProductProps {
    product?: {
        id: string;
        name: string;
        description: string;
        price: number;
        images: string[];
    };
}

const defaultProduct = {
    id: 'featured-1',
    name: 'Premium Comfort Hoodie',
    description: 'Soft cotton blend, perfect for everyday wear',
    price: 89.99,
    images: [
        'https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/6347546/pexels-photo-6347546.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ]
};

const FeaturedProduct = ({ product = defaultProduct }: FeaturedProductProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative product-card rounded-xl overflow-hidden bg-white shadow-md h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative aspect-[3/4] overflow-hidden">
                {product.images.map((image, index) => (
                    <div
                        key={index}
                        className={cn(
                            "absolute inset-0 transition-all duration-700 ease-in-out",
                            index === currentImageIndex ? "opacity-100" : "opacity-0"
                        )}
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                            transition: 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out',
                        }}
                    />
                ))}

                {product.images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                        {product.images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-all",
                                    index === currentImageIndex ? "bg-white scale-125" : "bg-white/50"
                                )}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="p-4 bg-white">
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                    <span className="font-bold text-xl">${product.price.toFixed(2)}</span>
                    <button className="bg-black hover:bg-gray-800 text-white rounded-full p-2 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className={cn(
                    "absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded",
                    "transform transition-transform duration-300",
                    isHovered ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
                )}
            >
                HOT DROP
            </div>
        </div>
    );
};

export default FeaturedProduct;
