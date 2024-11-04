import React from 'react';
import { LineChart, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <LineChart className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl">ViseVision Analytics</span>
          </div>
          
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              Reports
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              Settings
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-medium">
              AK
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}