"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useState } from "react";

export default function SellProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    mainCategory: "",
    subCategory: "",
    discountPrice: "",
    actualPrice: "",
    link: "",
    bills: [],
    currentOwner: "",
    noOfRatings: "",
    rating: "",
    images: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleBillsChange = (e) => {
    setFormData({ ...formData, bills: Array.from(e.target.files) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "images" || key === "bills") {
        formData[key].forEach((file) => form.append(key, file));
      } else {
        form.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post("/api/v1/product", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Product created successfully");
    } catch (error) {
      alert("Error creating product: " + error.response.data.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Sell Your Product</h2>
      <form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input name="name" onChange={handleChange} required />
        
        <Label>Main Category</Label>
        <Input name="mainCategory" onChange={handleChange} required />
        
        <Label>Sub Category</Label>
        <Input name="subCategory" onChange={handleChange} required />
        
        <Label>Discount Price</Label>
        <Input name="discountPrice" type="number" onChange={handleChange} required />
        
        <Label>Actual Price</Label>
        <Input name="actualPrice" type="number" onChange={handleChange} required />
        
        <Label>Product Link</Label>
        <Input name="link" onChange={handleChange} />
        
        <Label>Upload Bills</Label>
        <Input type="file" multiple onChange={handleBillsChange} />
        
        <Label>Current Owner ID</Label>
        <Input name="currentOwner" onChange={handleChange} required />
        
        <Label>No of Ratings</Label>
        <Input name="noOfRatings" type="number" onChange={handleChange} required />
        
        <Label>Rating</Label>
        <Input name="rating" type="number" step="0.1" onChange={handleChange} required />
        
        <Label>Upload Images</Label>
        <Input type="file" multiple onChange={handleImageChange} />
        
        <Button type="submit" className="mt-4 w-full">Sell Product</Button>
      </form>
    </div>
  );
}
