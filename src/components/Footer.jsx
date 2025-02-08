import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright Section */}
          <div className="text-gray-500 text-sm">
            © 2024, <span className="text-emerald-600">Nest</span> - HTML Ecommerce Template
            <br />
            All rights reserved
          </div>

          {/* Contact Numbers */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-gray-100 p-2">
                <svg 
                  className="w-4 h-4 text-emerald-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <span className="text-emerald-600 font-semibold">1900 - 6666</span>
                <p className="text-gray-500 text-sm">Working 8:00 - 22:00</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-gray-100 p-2">
                <svg 
                  className="w-4 h-4 text-emerald-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <span className="text-emerald-600 font-semibold">1900 - 8888</span>
                <p className="text-gray-500 text-sm">24/7 Support Center</p>
              </div>
            </div>
          </div>

          {/* Social Media and Subscribe */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="text-sm text-gray-500">Follow Us</div>
            <div className="flex gap-2">
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-emerald-100 transition-colors">
                <Facebook className="w-4 h-4 text-emerald-600" />
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-emerald-100 transition-colors">
                <Twitter className="w-4 h-4 text-emerald-600" />
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-emerald-100 transition-colors">
                <Instagram className="w-4 h-4 text-emerald-600" />
              </a>
              <a href="#" className="bg-gray-100 p-2 rounded-full hover:bg-emerald-100 transition-colors">
                <Youtube className="w-4 h-4 text-emerald-600" />
              </a>
            </div>
            <div className="text-sm text-gray-500">
              Up to 15% discount on your first subscribe
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;