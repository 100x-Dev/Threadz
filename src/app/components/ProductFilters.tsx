import React from 'react';
import { motion } from 'framer-motion';

interface FilterProps {
  prices: string[];
  colors: string[];
  sizes: string[];
  selectedPrice: string;
  selectedColor: string;
  selectedSize: string;
  onPriceChange: (price: string) => void;
  onColorChange: (color: string) => void;
  onSizeChange: (size: string) => void;
}

const ProductFilters: React.FC<FilterProps> = ({
  prices,
  colors,
  sizes,
  selectedPrice,
  selectedColor,
  selectedSize,
  onPriceChange,
  onColorChange,
  onSizeChange,
}) => {
  return (
    <div className="space-y-6">
      {/* Price Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Price Range</h3>
        <div className="space-y-2">
          {prices.map((price) => (
            <label key={price} className="flex items-center space-x-2">
              <input
                type="radio"
                name="price"
                value={price}
                checked={selectedPrice === price}
                onChange={() => onPriceChange(price)}
                className="form-radio text-black"
              />
              <span className="text-gray-700">{price}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Colors</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <motion.button
              key={color}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onColorChange(color)}
              className={`w-8 h-8 rounded-full border-2 ${
                selectedColor === color ? 'border-black' : 'border-gray-200'
              }`}
              style={{
                backgroundColor: color.toLowerCase(),
                border: color.toLowerCase() === 'white' ? '1px solid #e5e5e5' : undefined,
              }}
              aria-label={`Select ${color} color`}
            />
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Sizes</h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <motion.button
              key={size}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSizeChange(size)}
              className={`px-4 py-2 rounded-md ${
                selectedSize === size
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {size}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;