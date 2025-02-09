"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useCategory } from '@/context/CategoryContext';

export const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { categories, fetchProductsByCategory, loading, selectedMainCategory, selectedSubCategory } = useCategory();

  const handleCategoryClick = (main, sub) => {
    fetchProductsByCategory(main, sub);
    setIsOpen(false);
  };

  // Format category name for display
  const formatCategoryName = (name) => {
    return name
      .replace(/&/g, ' & ')
      .replace(/([A-Z])/g, ' $1')
      .trim();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white border rounded-md shadow-sm hover:bg-gray-50"
        disabled={loading}
      >
        {loading ? 'Loading...' : selectedSubCategory 
          ? `${formatCategoryName(selectedMainCategory)} > ${formatCategoryName(selectedSubCategory)}`
          : 'Browse All Categories'
        }
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-72 mt-2 bg-white border rounded-md shadow-lg max-h-[80vh] overflow-y-auto">
          {Object.entries(categories).map(([mainCategory, subCategories]) => (
            <div key={mainCategory} className="relative group">
              <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-100">
                <span className="text-sm font-medium">{formatCategoryName(mainCategory)}</span>
                {subCategories.length > 0 && (
                  <ChevronRight className="w-4 h-4" />
                )}
              </div>
              
              {subCategories.length > 0 && (
                <div className="absolute left-full top-0 hidden group-hover:block w-72 bg-white border rounded-md shadow-lg max-h-[80vh] overflow-y-auto">
                  {subCategories.map((subCategory) => (
                    <div
                      key={subCategory}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => handleCategoryClick(mainCategory, subCategory)}
                    >
                      {formatCategoryName(subCategory)}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};