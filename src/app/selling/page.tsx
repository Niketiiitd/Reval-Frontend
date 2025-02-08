'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { CategoryAndCondition } from "@/helper/category";
import Image from 'next/image';
import { useState } from 'react';

export default function SellingPage() {
  const [media, setMedia] = useState([]);
  const [itemDetails, setItemDetails] = useState({
    brand: '',
    shoeSize: '',
    color: '',
    department: '',
    category: '',
    condition: ''
  });

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    if (media.length + files.length > 7) {
      alert('You can only upload up to 7 media files.');
      return;
    }
    setMedia([...media, ...files]);
  };

  const labels = ["front", "back", "top", "bottom", "box", "tag", "bill"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const calculateTax = () => {
    return itemDetails.price * 0.18;
  };

  const calculateTotal = () => {
    const shipping = 10;
    const tax = calculateTax();
    return parseFloat(itemDetails.price) - tax - shipping;
  };
  const handleSubmit = () => {
    // Handle the form submission logic here
    console.log("Form submitted", itemDetails);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Complete Your Listing</h1>
      <h3 className='font-bold mt-12'> Photos and Videos</h3>
      <p className="text-gray-600">
        Add at least 1 photo. You can add up to 24 photos and a 1-minute video. Buyers want to see all details and angles.
      </p>

      <div className="grid grid-cols-7 gap-x-4">
        <div className="col-span-4 row-span-4 border-2 border-dashed border-gray-300 p-6 rounded-lg text-center relative">
          <input
            type="file"
            multiple
            accept="image/*,video/*"
            className="absolute inset-0 opacity-0 cursor-pointer w-[300px] h-[300px]"
            onChange={handleUpload}
          />
          <p className="text-gray-600">Drag & drop your media here</p>
          <Button className="mt-4">Upload from Computer</Button>
        </div>

        {labels.map((label, index) => (
          <div
            key={index}
            className="w-24 h-24 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-lg cursor-pointer relative col-span-1"
          >
            {media[index] ? (
              <Image
                src={URL.createObjectURL(media[index])}
                alt="Uploaded"
                width={96}
                height={96}
                className="rounded-lg object-cover w-full h-full"
              />
            ) : (
              <p className="text-gray-400">{label}</p>
            )}
          </div>
        ))}
      </div>

      <Separator />

      <div className="mt-6">
        <h3 className="font-bold mt-6">Item Title</h3>
        <Input type="text" placeholder="Enter item title" className='mt-4' />
      </div>

      <div className="mt-6">
        <h3 className="font-bold">Item Category</h3>
        <div className='mt-4'>
          <CategoryAndCondition type="category" value={itemDetails.category} onChange={(value) => setItemDetails({ ...itemDetails, category: value })} />
        </div>
      </div>

      <Separator />

      <div className="mt-6">
        <h3 className="font-bold">Item Specifics</h3>
        <p className="text-gray-600">Required - Buyers need these details to find your item.</p>

        <div className="mt-4 flex items-center">
          <label className="font-semibold w-32">Brand</label>
          <Input
            type="text"
            name="brand"
            value={itemDetails.brand}
            onChange={handleChange}
            placeholder="Enter brand"
            className="mt-2 ml-4 w-full"
          />
        </div>

        <div className="mt-4 flex items-center">
          <label className="font-semibold w-32">US Shoe Size</label>
          <Input
            type="text"
            name="shoeSize"
            value={itemDetails.shoeSize}
            onChange={handleChange}
            placeholder="Enter US shoe size"
            className="mt-2 ml-4 w-full"
          />
        </div>

        <div className="mt-4 flex items-center">
          <label className="font-semibold w-32">Color</label>
          <Input
            type="text"
            name="color"
            value={itemDetails.color}
            onChange={handleChange}
            placeholder="Enter color"
            className="mt-2 ml-4 w-full"
          />
        </div>

        <div className="mt-4 flex items-center">
          <label className="font-semibold w-32">Department</label>
          <Input
            type="text"
            name="department"
            value={itemDetails.department}
            onChange={handleChange}
            placeholder="Enter department"
            className="mt-2 ml-4 w-full"
          />
        </div>
      </div>

      <Separator />

      <div className="mt-6">
        <h3 className="font-bold">Condition</h3>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="mt-4">Info</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Item Condition</AlertDialogTitle>
              <AlertDialogDescription>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold">New with box</h4>
                    <p>A brand-new, unused, and unworn item (including handmade items) in the original packaging (such as the original box or bag) and/or with the original tags attached.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">New without box</h4>
                    <p>A brand-new, unused, and unworn item (including handmade items) that is not in original packaging or may be missing original packaging materials (such as the original box or bag). The original tags may not be attached. For example, new shoes (with absolutely no signs of wear) that are no longer in their original box fall into this category.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">New with defects</h4>
                    <p>A brand-new, unused, and unworn item. Possible cosmetic imperfections range from natural color variations to scuffs, cuts or nicks, hanging threads or missing buttons that occasionally occur during the manufacturing or delivery process. The apparel may contain irregular or mismarked size tags. The item may be missing the original packaging materials (such as original box or tag). New factory seconds and/or new irregular items may fall into this category. The original tags may or may not be attached. See the seller’s listing for full details and description of any imperfections.</p>
                  </div>
                  <div>
                    <h4 className="font-bold">Pre-owned</h4>
                    <p>An item that has been used or worn previously. See the seller’s listing for full details and description of any imperfections.</p>
                  </div>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <div className='mt-4'>
          <CategoryAndCondition type="condition" value={itemDetails.condition} onChange={(value) => setItemDetails({ ...itemDetails, condition: value })} />
        </div>
      </div>
      <Separator />

      <div className="mt-6">
        <h3 className="font-bold">Description</h3>
        <Textarea
          name="description"
          value={itemDetails.description}
          onChange={handleChange}
          placeholder="Type your description here."
          className="mt-4 w-full"
        />
      </div>
      <Separator />

      <div className="mt-6">
        <h3 className="font-bold">Pricing</h3>
        <div className="mt-4 flex items-center">
          <label className="font-semibold w-32">Price</label>
          <Input
            type="number"
            name="price"
            value={itemDetails.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="mt-2 ml-4 w-full"
          />
        </div>

        <div className="mt-4 flex items-center">
          <label className="font-semibold w-32">Tax (18%)</label>
          <Input
            type="number"
            value={calculateTax()}
            readOnly
            className="mt-2 ml-4 w-full"
          />
        </div>

        <div className="mt-4 flex items-center">
          <label className="font-semibold w-32">Shipping</label>
          <Input
            type="number"
            value={100}
            readOnly
            className="mt-2 ml-4 w-full"
          />
        </div>

        <div className="mt-4 flex items-center">
          <label className="font-semibold w-32">Total</label>
          <Input
            type="number"
            value={calculateTotal()}
            readOnly
            className="mt-2 ml-4 w-full font-bold text-lg"
          />
        </div>
      </div>
      <div className="mt-6 text-center">
        <Button onClick={handleSubmit} className="w-full py-3 text-lg font-bold">List It</Button>
      </div>
    </div>
  );
}