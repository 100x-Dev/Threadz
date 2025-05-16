import React, { useState } from 'react';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../data/products';
import Button from './Button';
import { motion } from 'framer-motion';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [isLiked, setIsLiked] = useState(false);

    return (
        <motion.div
            className="group relative rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ y: -5 }}
            layout
        >
            <div className="aspect-square overflow-hidden bg-gray-100 relative">
                <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                />

                {/* Quick shop overlay */}
                <motion.div
                    className="absolute inset-0 bg-black/5 flex flex-col justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="p-4 bg-white"
                        initial={{ y: 100 }}
                        animate={{ y: isHovered ? 0 : 100 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex gap-2 mb-3 justify-center">
                            {product.colors.map((color: string) => (
                                <motion.button
                                    key={color}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-6 h-6 rounded-full border ${selectedColor === color ? 'ring-2 ring-black ring-offset-1' : ''
                                        }`}
                                    style={{
                                        backgroundColor:
                                            color.toLowerCase() === 'white' ? 'white' :
                                                color.toLowerCase() === 'black' ? 'black' :
                                                    color.toLowerCase() === 'navy' ? '#0a192f' :
                                                        color.toLowerCase() === 'gray' ? '#6b7280' :
                                                            color.toLowerCase() === 'olive' ? '#4d5c27' :
                                                                color.toLowerCase() === 'maroon' ? '#800020' :
                                                                    color.toLowerCase() === 'beige' ? '#f5f5dc' :
                                                                        color.toLowerCase() === 'sage' ? '#9caf88' : '#efefef'
                                    }}
                                    aria-label={color}
                                />
                            ))}
                        </div>
                        <Button size="sm" className="group relative overflow-hidden mt-2 py-1 px-2 text-xs">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <ShoppingBag size={14} />
                                Add
                            </span>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Product badges */}
            {(product.isNew || product.isBestseller) && (
                <motion.div
                    className="absolute top-2 left-2 z-10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {product.isNew && (
                        <span className="bg-black text-white text-xs px-2 py-1 rounded-md">
                            New
                        </span>
                    )}
                    {product.isBestseller && (
                        <span className="bg-black text-white text-xs px-2 py-1 rounded-md ml-2">
                            Bestseller
                        </span>
                    )}
                </motion.div>
            )}

            {/* Wishlist button */}
            <motion.button
                className={`absolute top-2 right-2 bg-white rounded-full p-2 shadow-md z-10 ${isLiked ? 'text-red-500' : 'text-gray-600'
                    }`}
                onClick={() => setIsLiked(!isLiked)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <Heart
                    size={18}
                    fill={isLiked ? "currentColor" : "none"}
                />
            </motion.button>

            {/* Product info */}
            <div className="p-4">
                <h3 className="text-lg font-medium mb-1">{product.name}</h3>
<motion.p
    className="text-gray-900 font-semibold"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
>
    ${product.price.toFixed(2)}
</motion.p>

            </div>
        </motion.div>
    );
};

export default ProductCard;