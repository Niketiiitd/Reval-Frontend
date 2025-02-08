import React from 'react';


import SingleProductCard from "@/components/SingleProductCard"

// Page Component
const HomeProductListings = () => {
  const products = [
    {
      name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      category: "Snack",
      price: 28.85,
      originalPrice: 32.8,
      rating: 4,
      reviewCount: "4.0",
      brand: "NestFood",
      image: "/api/placeholder/200/200",
      badge: "Hot"
    },
    {
      name: "All Natural Italian-Style Chicken Meatballs",
      category: "Hodo Foods",
      price: 52.85,
      originalPrice: 55.8,
      rating: 3.5,
      reviewCount: "3.5",
      brand: "Stouffer",
      image: "/api/placeholder/200/200",
      badge: "Sale"
    },
    // Add more products as needed
  ];

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      {/* Category Tabs */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold">Popular Products</h1>
        <div className="flex gap-4">
          {['All', 'Milks & Dairies', 'Coffes & Teas', 'Pet Foods', 'Meats', 'Vegetables', 'Fruits'].map((category) => (
            <button
              key={category}
              className="text-gray-600 hover:text-green-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <SingleProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeProductListings;