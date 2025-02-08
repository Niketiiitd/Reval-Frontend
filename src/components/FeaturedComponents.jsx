"use client"
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const CategoryScroll = () => {
  const scrollRef = useRef(null);

  const categories = [
    { name: 'Cake & Milk', items: 26, image: '/api/placeholder/80/80', slug: 'cake-milk' },
    { name: 'Organic Kiwi', items: 28, image: '/api/placeholder/80/80', slug: 'organic-kiwi' },
    { name: 'Peach', items: 14, image: '/api/placeholder/80/80', slug: 'peach' },
    { name: 'Red Apple', items: 54, image: '/api/placeholder/80/80', slug: 'red-apple' },
    { name: 'Snack', items: 56, image: '/api/placeholder/80/80', slug: 'snack' },
    { name: 'Vegetables', items: 72, image: '/api/placeholder/80/80', slug: 'vegetables' },
    { name: 'Strawberry', items: 36, image: '/api/placeholder/80/80', slug: 'strawberry' },
    { name: 'Black plum', items: 123, image: '/api/placeholder/80/80', slug: 'black-plum' },
    { name: 'Custard apple', items: 34, image: '/api/placeholder/80/80', slug: 'custard-apple' },
    { name: 'Coffe & Tea', items: 89, image: '/api/placeholder/80/80', slug: 'coffee-tea' },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Featured Categories</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar"
      >
        {categories.map((category) => (
          <Link
            href={`/category/${category.slug}`}
            key={category.slug}
            className="flex-shrink-0 w-48 group"
          >
            <div className="bg-gray-50 rounded-lg p-4 transition-transform hover:scale-105">
              <div className="aspect-square mb-4 rounded-lg overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-gray-800 mb-1">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.items} items</p>
            </div>
          </Link>
        ))}
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CategoryScroll;