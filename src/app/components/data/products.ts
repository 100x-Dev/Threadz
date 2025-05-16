export interface Product {
    id: number;
    name: string;
    price: number;
    category: 'hoodie' | 'tshirt';
    image: string;
    colors: string[];
    isNew?: boolean;
    isBestseller?: boolean;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Vintage Washed Hoodie",
        price: 59.99,
        category: "hoodie",
        image: "https://images.pexels.com/photos/5698853/pexels-photo-5698853.jpeg?auto=compress&cs=tinysrgb&w=1600",
        colors: ["Black", "Gray", "Navy"],
        isNew: true
    },
    {
        id: 2,
        name: "Essential Crewneck",
        price: 49.99,
        category: "hoodie",
        image: "https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=1600",
        colors: ["Black", "White", "Olive"],
        isBestseller: true
    },
    {
        id: 3,
        name: "Premium Cotton Tee",
        price: 29.99,
        category: "tshirt",
        image: "https://images.pexels.com/photos/5384429/pexels-photo-5384429.jpeg?auto=compress&cs=tinysrgb&w=1600",
        colors: ["White", "Black", "Gray", "Navy"]
    },
    {
        id: 4,
        name: "Graphic Print T-Shirt",
        price: 34.99,
        category: "tshirt",
        image: "https://images.pexels.com/photos/6764036/pexels-photo-6764036.jpeg?auto=compress&cs=tinysrgb&w=1600",
        colors: ["Black", "White"],
        isNew: true
    },
    {
        id: 5,
        name: "Zip-Up Hoodie",
        price: 64.99,
        category: "hoodie",
        image: "https://images.pexels.com/photos/7691119/pexels-photo-7691119.jpeg?auto=compress&cs=tinysrgb&w=1600",
        colors: ["Gray", "Black", "Maroon"]
    },
    {
        id: 6,
        name: "Minimalist Logo Tee",
        price: 27.99,
        category: "tshirt",
        image: "https://images.pexels.com/photos/6311659/pexels-photo-6311659.jpeg?auto=compress&cs=tinysrgb&w=1600",
        colors: ["White", "Black", "Olive"]
    },
    {
        id: 7,
        name: "Oversized Fit Hoodie",
        price: 69.99,
        category: "hoodie",
        image: "https://images.pexels.com/photos/9558898/pexels-photo-9558898.jpeg?auto=compress&cs=tinysrgb&w=1600",
        colors: ["Black", "Beige", "Gray"],
        isBestseller: true
    },
    {
        id: 8,
        name: "Organic Cotton T-Shirt",
        price: 32.99,
        category: "tshirt",
        image: "https://images.pexels.com/photos/10043264/pexels-photo-10043264.jpeg?auto=compress&cs=tinysrgb&w=1600",
        colors: ["White", "Black", "Sage"]
    }
];