"use client"
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const SubscriptionBanner = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
  };

  return (
    <div className="mx-auto max-w-6xl mb-8">
      <div className="relative w-full bg-[#e8f3f0] rounded-2xl overflow-hidden shadow-md">
        <div className="container mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              "Waste not, want not - Close the loop"
              </h2>
              <p className="text-slate-600 mb-8">
                Start your shopping with{" "}
                <span className="text-emerald-600">Reval</span>
              </p>
              
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="w-full h-12 px-4 rounded-full border-gray-200"
                  />
                </div>
                <Button 
                  type="submit"
                  className="h-12 px-8 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBanner;