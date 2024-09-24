import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Router, Routes, Route, and Navigate
import Header from './components/Header'; // Import Header component
import Dashboard from './components/Dashboard'; // Import Dashboard component
import Orders from './components/Orders'; // Import Orders component
import Payments from './components/Payments'; // Import Payments component
import LoginPage from './pages/LoginPage'; // Import LoginPage component
import SignUpPage from './pages/SignUpPage'; // Import SignUpPage component
import HomePage from './pages/HomePage'; // Import HomePage component

function App() {
  const isAuthenticated = true; // This should come from actual auth logic

  return (
    <Router>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Protected Routes */}
        <Route path="/home" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/orders" element={isAuthenticated ? <Orders /> : <Navigate to="/login" />} />
        <Route path="/home" element={isAuthenticated ? <Payments /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
