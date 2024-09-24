import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EditIcon from '@mui/icons-material/Edit';
import ListIcon from '@mui/icons-material/List';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-gray-400 text-white p-6 rounded-lg shadow-lg">

        {/* Earnings Section */}
        <div className="bg-gray-900 text-gray-100 shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold">INR 5670/-</h2>
          <p className="text-gray-100">Today's Earnings</p>
        </div>

        {/* Orders Summary */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-900 text-center p-4 rounded-lg shadow-md">
            <h3 className="text-lg">28</h3>
            <p>Total Orders</p>
          </div>
          <div className="bg-gray-900 text-center p-4 rounded-lg shadow-md">
            <h3 className="text-lg">5</h3>
            <p>In Progress</p>
          </div>
          <div className="bg-gray-900 text-center p-4 rounded-lg shadow-md">
            <h3 className="text-lg">3</h3>
            <p>Cancelled</p>
          </div>
        </div>

        {/* View Orders Button */}
        <button className="bg-purple-500 text-white mt-6 p-4 rounded-lg w-full flex items-center justify-center space-x-2 hover:bg-purple-600 transition duration-300">
          <ListIcon />
          <span>View Orders</span>
        </button>

        {/* Orders List Section */}
        <div className="mt-6 space-y-4">
          {[1, 2, 3].map((order) => (
            <div key={order} className="bg-gray-900 text-gray-100 shadow-md rounded-lg p-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
                <div>
                  <p className="font-bold">#4558-2581</p>
                  <p>Delivery Partner: Harshit Maurya</p>
                </div>
                <div className="flex items-center space-x-2">
                  {/* Mark Delivered */}
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-1 hover:bg-green-600">
                    <CheckCircleIcon />
                    <span>Mark Delivered</span>
                  </button>

                  {/* Delete Order */}
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-1 hover:bg-red-600">
                    <DeleteIcon />
                    <span>Cancel</span>
                  </button>
                </div>
              </div>
              
              <div className="mt-2">
                <button className="text-blue-500 underline">View Status</button>
              </div>
            </div>
          ))}
        </div>

        {/* Menu and Action Buttons */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <button className="bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-600 transition duration-300">
            <MenuBookIcon />
            <span>View Menu</span>
          </button>
          <button className="bg-yellow-500 text-white p-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-yellow-600 transition duration-300">
            <EditIcon />
            <span>Update Menu</span>
          </button>
        </div>

        {/* Additional Action Buttons */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <button className="bg-red-500 text-white p-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-600 transition duration-300">
            <ReportProblemIcon />
            <span>Raise Dispute</span>
          </button>
          <button className="bg-purple-500 text-white p-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-purple-600 transition duration-300">
            <VisibilityIcon />
            <span>Access Customer Data</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
