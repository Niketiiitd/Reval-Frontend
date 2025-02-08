"use client"
import React, { useState } from 'react';
import { Search, MapPin, ShoppingCart, User, Phone, ChevronDown, Menu, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { CategoryAndCondition } from '@/helper/categoryDropdown';
import { useCategory } from "@/context/CategoryContext"
const Navbar = () => {
   const { selectedCategory, setSelectedCategory, categories } = useCategory();
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // Sample categories data
  // const categories = [
  //   {
  //     name: 'Fresh Food',
  //     subCategories: ['Meat & Poultry', 'Vegetables', 'Fruits', 'Sea Food']
  //   },
  //   {
  //     name: 'Dairy & Eggs',
  //     subCategories: ['Milk', 'Butter', 'Cheese', 'Eggs']
  //   },
  //   {
  //     name: 'Beverages',
  //     subCategories: ['Coffee', 'Tea', 'Juice', 'Soda']
  //   },
  //   {
  //     name: 'Grocery & Staples',
  //     subCategories: ['Rice', 'Flour', 'Sugar', 'Spices']
  //   }
  // ];

  // Sample locations
  const locations = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'
  ];

  // Sample cart items
  const cartItems = [
    { id: 1, name: 'Fresh Apples', price: 4.99, quantity: 2 },
    { id: 2, name: 'Organic Milk', price: 3.99, quantity: 1 }
  ];

  return (
    <header className="w-full relative">
      {/* Top Navigation */}
      <div className="w-full bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <img src="/api/placeholder/40/40" alt="Nest Logo" className="h-10 transition-transform group-hover:scale-105" />
              <span className="text-primary text-2xl font-bold group-hover:text-opacity-80">ReVal</span>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <select 
                  className="absolute  text-gray-600 bg-transparent appearance-none "
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {/* <option>All Categories</option>
                  {categories.map(cat => (
                    <option key={cat.name}>{cat.name}</option>
                  ))} */}
                </select>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for anything"
                  className="w-full pl-6 py-2 border rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
                <button className="absolute right-0 top-0 h-full px-4 text-gray-600 hover:text-primary transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Menu */}
            <div className="flex items-center space-x-6">
              {/* category Selector */}
              {/* <CategoryAndCondition type="category" value={itemDetails.category} onChange={(value) => setItemDetails({ ...itemDetails, category: value || "" })} /> */}
              
              <div className="relative">
                <button 
                  className="flex items-center space-x-2 hover:text-primary transition-colors"
                  onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
                >
                 
                  <span className="text-sm">Select Location</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isLocationDropdownOpen ? 'rotate-180' : ''}`} />
                </button> 
                
                {/* Location Dropdown */}
                 {isLocationDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                    {locations.map((location) => (
                      <button
                        key={location}
                        className="w-full text-left px-4 py-2 hover:bg-secondary hover:text-primary transition-colors"
                        onClick={() => {
                          // Handle location selection
                          setIsLocationDropdownOpen(false);
                        }}
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                )} 
              </div>

              {/* Cart and Wishlist */}
              <div className="flex items-center space-x-4">
                {/* Cart */}
                <div className="relative">
                  <button 
                    className="flex items-center hover:text-primary transition-colors"
                    onClick={() => setIsCartOpen(!isCartOpen)}
                  >
                    <div className="relative">
                      <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-primary transition-colors" />
                      <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {cartItems.length}
                      </span>
                    </div>
                  </button>

                  {/* Cart Dropdown */}
                  {isCartOpen && (
                    <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border z-50">
                      <div className="p-4">
                        <h3 className="font-semibold mb-3">Shopping Cart</h3>
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center justify-between py-2 border-b">
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-500">{item.quantity} × ${item.price}</p>
                            </div>
                            <button className="text-red-500 text-sm hover:text-red-600">×</button>
                          </div>
                        ))}
                        <div className="mt-4">
                          <div className="flex justify-between font-semibold mb-4">
                            <span>Total:</span>
                            <span>${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</span>
                          </div>
                          <button className="w-full bg-primary text-black py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                            View Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Wishlist */}
                <button className="flex items-center">
                  <div className="relative group">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <span className="text-primary group-hover:scale-110 transition-transform">♡</span>
                    </div>
                    <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      0
                    </span>
                  </div>
                </button>

                {/* User Account */}
                <button className="flex items-center hover:text-primary transition-colors">
                  <User className="w-6 h-6 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="w-full bg-white shadow-sm">
        
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Browse Categories Button */}
           {/* Browse Categories Button */}
<div className="relative">
  <button 
    className="flex items-center space-x-2 bg-primary text-black px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
    onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
  >
    <Menu className="w-5 h-5" />
    <span>Browse All Categories</span>
    <ChevronDown className={`w-4 h-4 transition-transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
  </button>

  {/* Categories Dropdown */}
  {isCategoryDropdownOpen && (
    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50">
      {categories && categories.length > 0 ? (
        categories.map((category) => (
          <div key={category.value} className="group relative">
            <button 
              className="w-full flex items-center justify-between px-4 py-2 hover:bg-secondary hover:text-primary transition-colors"
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label} {/* Ensure correct label */}
              {category.subCategories && category.subCategories.length > 0 && <ChevronRight className="w-4 h-4" />}
            </button>

            {/* Subcategories Dropdown */}
            {category.subCategories && category.subCategories.length > 0 && (
              <div className="hidden group-hover:block absolute left-full top-0 w-48 bg-white rounded-lg shadow-lg border">
                {category.subCategories.map((subCategory) => (
                  <button
                    key={subCategory}
                    className="w-full text-left px-4 py-2 hover:bg-secondary hover:text-primary transition-colors"
                  >
                    {subCategory}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-center py-2 text-gray-500">No Categories Available</p>
      )}
    </div>
  )}
</div>


            {/* Main Navigation */}
            <nav className="flex-1">
              <ul className="flex  ml-8 gap-32">
                {[ 'Home','Community', 'About', 'Shop'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase()}`} 
                      className="text-gray-700 hover:text-primary transition-colors relative group"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Support Contact */}
            {/* <div className="flex items-center space-x-2 text-primary group cursor-pointer">
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <div>
                <div className="text-sm font-medium group-hover:text-opacity-80 transition-colors">1900 - 888</div>
                <div className="text-xs text-gray-500">24/7 Support Center</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;