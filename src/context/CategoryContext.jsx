"use client"
import React, { createContext, useContext, useState } from "react";

// List of categories
// const categories = [
//   'Arts, Crafts & Sewing', 'Automotive', 'Baby Products', 'Beauty & Personal Care',
//   'Cell Phones & Accessories', 'Clothing, Shoes & Jewelry', 'Electronics', 
//   'Grocery & Gourmet Food', 'Health & Household', 'Hobbies', 'Home & Kitchen', 
//   'Industrial & Scientific', 'Movies & TV', 'Musical Instruments', 'Office Products', 
//   'Patio, Lawn & Garden', 'Pet Supplies', 'Remote & App Controlled Vehicle Parts',
//   'Remote & App Controlled Vehicles & Parts', 'Sports & Outdoors', 'Tools & Home Improvement', 
//   'Toys & Games', 'Video Games', 'nan'
// ];
const categories = [
    { value: "arts-crafts-sewing", label: "Arts, Crafts & Sewing" },
    { value: "automotive", label: "Automotive" },
    { value: "baby-products", label: "Baby Products" },
    { value: "beauty-personal-care", label: "Beauty & Personal Care" },
    { value: "cell-phones-accessories", label: "Cell Phones & Accessories" },
    { value: "clothing-shoes-jewelry", label: "Clothing, Shoes & Jewelry" },
    { value: "electronics", label: "Electronics" },
    { value: "grocery-gourmet-food", label: "Grocery & Gourmet Food" },
    { value: "health-household", label: "Health & Household" },
    { value: "hobbies", label: "Hobbies" },
    { value: "home-kitchen", label: "Home & Kitchen" },
    { value: "industrial-scientific", label: "Industrial & Scientific" },
    { value: "movies-tv", label: "Movies & TV" },
    { value: "musical-instruments", label: "Musical Instruments" },
    { value: "office-products", label: "Office Products" },
    { value: "patio-lawn-garden", label: "Patio, Lawn & Garden" },
    { value: "pet-supplies", label: "Pet Supplies" },
    { value: "remote-controlled-vehicle-parts", label: "Remote & App Controlled Vehicle Parts" },
    { value: "remote-controlled-vehicles", label: "Remote & App Controlled Vehicles & Parts" },
    { value: "sports-outdoors", label: "Sports & Outdoors" },
    { value: "tools-home-improvement", label: "Tools & Home Improvement" },
    { value: "toys-games", label: "Toys & Games" },
    { value: "video-games", label: "Video Games" }
  ];
  


const CategoryContext = createContext();


export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory, categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

// Custom hook to use context
export const useCategory = () => useContext(CategoryContext);
