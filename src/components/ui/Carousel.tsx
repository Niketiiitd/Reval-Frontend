"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const carouselItems = [
  {
    title: "Electronics",
    subtitle: "Big discount",
    description: "Save up to 50% off on your first order",
    bgColor: "bg-primary-content",
    image: "/electronics-1.webp"
  },
  {
    title: "Clothes, Shoes and More",
    subtitle: "Special Offer",
    description: "Get 30% off on selected organic fruits",
    bgColor: "bg-accent",
    image: "/clothes.jpg"
  },
  {
    title: "Furniture",
    subtitle: "Limited Time",
    description: "Buy 2 Get 1 Free on dairy products",
    bgColor: "bg-primary-content",
    image: "/furniture.jpg"
  },
  {
    title: "Bags and More",
    subtitle: "Weekly Deal",
    description: "All natural snacks at 25% off",
    bgColor: "bg-accent",
    image: "/bags.jpg"
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto h-96 overflow-hidden rounded-2xl">
      {/* Slides Container */}
      <div 
        className="h-full flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`w-full h-full flex-shrink-0 relative bg-cover bg-center ${item.bgColor}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="relative z-10 flex flex-col justify-center px-16 h-full bg-black/40">
              <h2 className="text-4xl font-bold text-white mb-2">
                {item.title}
              </h2>
              <h3 className="text-3xl font-semibold text-white mb-4">
                {item.subtitle}
              </h3>
              <p className="text-lg text-white mb-8">
                {item.description}
              </p>
              <div className="flex items-center space-x-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-6 py-3 rounded-full w-80 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-opacity-90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
