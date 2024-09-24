// LoginForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate('/home');
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-96 p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-green-400 uppercase text-center">Sign In</h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="relative">
            <h1 className='text-white'>Username</h1>
            <input
              type="text"
              required
              className="w-full px-4 py-3 text-white bg-gray-100 border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          
          <div className="relative">
            <h1 className='text-white'>Password</h1>
            <input
              type="password"
              required
              className="w-full px-4 py-3 text-white bg-gray-700 border border-transparent rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          
          <div className="flex justify-between">
            <a href="#" className="text-white">Forgot Password</a>
            <a href="/signup" className="text-green-400">Signup</a>
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 font-semibold text-black bg-green-400 rounded hover:bg-green-300"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
