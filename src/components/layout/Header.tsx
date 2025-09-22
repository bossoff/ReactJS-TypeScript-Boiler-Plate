import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-600">CurnectGate</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium">Dashboard</a>
            <a href="#" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium">Properties</a>
            <a href="#" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium">Services</a>
            <a href="#" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium">Profile</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;