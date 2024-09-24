// src/pages/SignUpPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (email && password && password === confirmPassword) {
      console.log("Sign up successful!");
      navigate('/home');
    } else {
      alert("Passwords do not match or fields are empty");
    }
  };

  return (
    <div className="relative min-h-screen grid grid-cols-8 grid-rows-8 bg-gray-900">
      {/* {Array.from({ length: 64 }).map((_, index) => (
        <div
          key={index}
          className={`w-full h-full transition-colors duration-500 ${
            index % 2 === 0 ? 'bg-white-700' : 'bg-yellow-200'
          } animate-pulse`}
        ></div>
      ))} */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg w-80">
          <Typography variant="h4" gutterBottom className="text-center mb-4">
            Sign Up
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleSignUp}>
            Sign Up
          </Button>
          <Typography variant="body2" className="mt-4 text-center">
            Already have an account?{' '}
            <Button onClick={() => navigate('/login')} color="primary">
              Login
            </Button>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
