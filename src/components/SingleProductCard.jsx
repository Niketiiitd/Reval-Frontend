import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export const SingleProductCard = ({ product }) => {
    return (
      <Card className="group overflow-hidden">
        <CardContent className="p-3">
          {/* Badge Section */}
          <div className="relative">
            {product.badge && (
              <Badge 
                className={`absolute top-2 left-2 z-10 
                  ${product.badge === 'Hot' ? 'bg-red-500' : 
                    product.badge === 'Sale' ? 'bg-blue-400' : 
                    product.badge === 'New' ? 'bg-green-500' : 
                    'bg-orange-400'}`}
              >
                {product.badge}
              </Badge>
            )}
            
            {/* Product Image */}
            <div className="mb-3 aspect-square rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
              />
            </div>
          </div>
  
          {/* Category */}
          <div className="text-sm text-gray-500 mb-1">{product.category}</div>
  
          {/* Product Name */}
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
            {product.name}
          </h3>
  
          {/* Rating */}
          <div className="flex items-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-200 text-gray-200'
                }`}
              />
            ))}
            <span className="text-sm text-gray-500">({product.reviewCount})</span>
          </div>
  
          {/* Brand */}
          <div className="text-sm text-gray-500 mb-2">By {product.brand}</div>
  
          {/* Price Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-green-600">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            
            <button className="px-3 py-1 text-sm bg-green-50 text-green-600 rounded-md hover:bg-green-100 transition-colors">
              Add
            </button>
          </div>
        </CardContent>
      </Card>
    );
  };
export default SingleProductCard