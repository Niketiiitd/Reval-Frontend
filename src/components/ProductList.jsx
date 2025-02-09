"use client"
import React from 'react';
import { useCategory } from '@/context/CategoryContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const ProductList = () => {
  const { products, loading, error } = useCategory();

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        {error}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Select a category to view products
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <Card key={product.product_id} className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg truncate">{product.product_name}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="aspect-square relative mb-4">
              <img
                src={product.img_link}
                alt={product.product_name}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-bold text-xl">₹{product.discounted_price}</span>
                <span className="text-gray-500 line-through">₹{product.actual_price}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">★</span>
                <span>{product.rating} ({product.rating_count} reviews)</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
              View Details
            </button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};