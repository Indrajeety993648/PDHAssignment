import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.jpg';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">ChefBytes</h1>
      <nav className="flex items-center">
      <Link to="/home" className="mr-4 hover:text-blue-400 transition duration-300">Home</Link>
        <Link to="/dashboard" className="mr-4 hover:text-blue-400 transition duration-300">Dashboard</Link>
        <Link to="/orders" className="mr-4 hover:text-blue-400 transition duration-300">Orders</Link>
        <Link to="/payments" className="mr-4 hover:text-blue-400 transition duration-300">Payments</Link>
        
        <div className="relative ml-4 group">
          <img 
            src={avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-white hover:opacity-90 transition duration-300 cursor-pointer"
          />

          <span className="absolute top-0 right-0 block w-3.5 h-3.5 bg-green-500 rounded-full ring-2 ring-white"></span>

          <span className="absolute -top-6 right-0 px-2 py-1 bg-gray-800 text-Green text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Active
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
