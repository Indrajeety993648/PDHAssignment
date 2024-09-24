import React from 'react';
import { Bell, Search, ChevronDown,  LogOut } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import user from '../assets/user.jpg';

import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import FeedbackIcon from '@mui/icons-material/Feedback';
import InfoIcon from '@mui/icons-material/Info';
import PaymentIcon from '@mui/icons-material/Payment';
import ListAltIcon from '@mui/icons-material/ListAlt';

const sessionsData = [
  { date: 'Apr 5', sessions: 5000 },
  { date: 'Apr 10', sessions: 7000 },
  { date: 'Apr 15', sessions: 10000 },
  { date: 'Apr 20', sessions: 15000 },
  { date: 'Apr 25', sessions: 20000 },
  { date: 'Apr 30', sessions: 25000 },
];

const pageViewsData = [
  { month: 'Jan', views: 8000, downloads: 3000 },
  { month: 'Feb', views: 9000, downloads: 4000 },
  { month: 'Mar', views: 7000, downloads: 2000 },
  { month: 'Apr', views: 8000, downloads: 3000 },
  { month: 'May', views: 10000, downloads: 4000 },
  { month: 'Jun', views: 11000, downloads: 5000 },
  { month: 'Jul', views: 7000, downloads: 3000 },
];

const HomePage = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-white">

      <aside className="w-full lg:w-64 bg-gray-800 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold">ChefByte</h1>
          <ChevronDown size={20} />
        </div>
        <nav>
          <ul className="space-y-2">
            <li className="bg-gray-700 rounded p-2 flex items-center">
              <HomeIcon className="mr-2" /> Home
            </li>
            <li className="p-2 flex items-center">
              <ListAltIcon className="mr-2" /> Orders
            </li>
            <li className="p-2 flex items-center">
              <PaymentIcon className="mr-2" /> Payments
            </li>
            <li className="p-2 flex items-center">
              <SettingsIcon className="mr-2" /> Settings
            </li>
            <li className="p-2 flex items-center">
              <InfoIcon className="mr-2" /> About
            </li>
            <li className="p-2 flex items-center">
              <FeedbackIcon className="mr-2" /> Feedback
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <div className="border-t border-gray-700 pt-4 mt-8">
            <h2 className="text-sm font-semibold mb-2">Plan about to expire</h2>
            <p className="text-sm mb-2">Enjoy 10% off when renewing your plan today.</p>
            <button className="bg-blue-500 text-white rounded px-4 py-2 text-sm">Get the discount</button>
          </div>
          <div className="flex items-center mt-4">
            <img src={user} alt="User" className="rounded-full mr-2 h-10 w-10" />
            <div>
              <p className="font-semibold">Harshit Morari</p>
              <p className="text-sm text-gray-400">harshit@gmail.com</p>
            </div>
            <LogOut size={20} className="ml-auto" />
          </div>
        </div>
      </aside>

      <main className="flex-1 p-4 lg:p-8">
        <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <h1 className="text-2xl font-bold mb-4 lg:mb-0">Admin's  WorkSpace</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input type="text" placeholder="Search..." className="bg-gray-800 rounded-full py-2 px-4 pl-10" />
              <Search size={20} className="absolute left-3 top-2 text-gray-400" />
            </div>
            <Bell size={20} />
            <span>Sep 24, 2024</span>
          </div>
        </header>

        <h2 className="text-xl font-bold mb-4">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2"> Unique Users</h3>
            <p className="text-3xl font-bold mb-1">14k</p>
            <p className="text-sm text-gray-400">Last 30 days</p>
            <span className="text-green-500">+25%</span>
            <ResponsiveContainer width="100%" height={100}>
              <RechartsLineChart data={sessionsData}>
                <Line type="monotone" dataKey="sessions" stroke="#10B981" strokeWidth={2} dot={false} />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
            <p className="text-3xl font-bold mb-1">200k</p>
            <p className="text-sm text-gray-400">Last 30 days</p>
            <span className="text-blue-500">+5%</span>
            <ResponsiveContainer width="100%" height={100}>
              <RechartsLineChart data={sessionsData}>
                <Line type="monotone" dataKey="sessions" stroke="#3B82F6" strokeWidth={2} dot={false} />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">History</h3>
            <p className="text-3xl font-bold mb-1">13,277</p>
            <p className="text-sm text-gray-400">Users per day for the last 30 days</p>
            <span className="text-green-500">+35%</span>
            <ResponsiveContainer width="100%" height={200}>
              <RechartsLineChart data={sessionsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                <Line type="monotone" dataKey="sessions" stroke="#3B82F6" strokeWidth={2} dot={false} />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2"> Total Users Visits</h3>
            <p className="text-3xl font-bold mb-1">1.3M</p>
            <p className="text-sm text-gray-400">Page views and downloads for the last 6 months</p>
            <span className="text-red-500">-8%</span>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={pageViewsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                <Bar dataKey="views" fill="#3B82F6" />
                <Bar dataKey="downloads" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
