import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function Checkout() {
  const products = [
    {
      id: 1,
      name: "Sz 5-12 WMNS Nike Air Jordan 12 WNBA Brilliant Orange Black White FD9101-081",
      price: 284.99,
      quantity: 1,
      deliveryFee: 92.87,
      image: "https://example.com/path-to-product-image.jpg", // Replace with a real image URL
      seller: {
        name: "John Doe",
        avatar: "https://example.com/path-to-avatar.jpg", // Replace with a real avatar URL
        rating: 4.8,
      },
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 relative">
      <h1 className="text-2xl font-bold">Checkout</h1>
      {/* Payment Method Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Pay with</h2>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Add a new card</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Paytm</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Paypal</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Shipping Section */}
      <div>
        <h1 className="text-xl font-semibold mb-2">Ship To</h1>
        <div className="border p-4 rounded-lg mb-4">
          <p>Address: [Your shipping address here]</p>
        </div>
      </div>

      {/* Products Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Products</h2>
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-start space-x-4 border-b pb-4 mb-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">US ${product.price.toFixed(2)}</p>
              <p>Quantity: {product.quantity}</p>
              <p className="text-sm text-green-600">Returns accepted</p>
              {/* Seller Details */}
              <div className="flex items-center space-x-4 mt-4">
                <Avatar>
                  <AvatarImage src={product.seller.avatar} alt={product.seller.name} />
                  <AvatarFallback>
                    {product.seller.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{product.seller.name}</p>
                  <p className="text-sm text-gray-500">
                    Rating: {product.seller.rating} ⭐
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary Section */}
      <div className="fixed top-6 right-6 bg-white border shadow-lg p-4 rounded-lg w-72">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2">
          {products.map((product) => (
            <div key={product.id} className="flex justify-between">
              <span>{product.name}</span>
              <span>US ${product.price.toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between font-bold">
            <span>Delivery Fee</span>
            <span>US ${products[0].deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold border-t pt-2">
            <span>Total</span>
            <span>
              US $
              {(
                products.reduce((sum, p) => sum + p.price, 0) +
                products[0].deliveryFee
              ).toFixed(2)}
            </span>
          </div>
        </div>
        <button className="bg-blue-600 text-white w-full py-2 mt-4 rounded-lg">
          Place Order
        </button>
      </div>
    </div>
  );
}
