import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const OrdersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [orders] = useState([
    {
      id: 1,
      name: 'Pallav Kumar Nayak',
      address: 'Ground Floor, Indiqube #213, HSR Layout, Bangalore',
      amount: 450.25,
      date: '21/10/2024 01:03:22 PM',
      status: 'In Progress',
    },
    {
      id: 2,
      name: 'Pallav Kumar Nayak',
      address: 'Ground Floor, Indiqube #213, HSR Layout, Bangalore',
      amount: 450.25,
      date: '21/10/2024 01:03:22 PM',
      status: 'Completed',
    },
    {
        id: 1,
        name: 'Pallav Kumar Nayak',
        address: 'Ground Floor, Indiqube #213, HSR Layout, Bangalore',
        amount: 450.25,
        date: '21/10/2024 01:03:22 PM',
        status: 'In Progress',
      },
    {
      id: 3,
      name: 'Pallav Kumar Nayak',
      address: 'Ground Floor, Indiqube #213, HSR Layout, Bangalore',
      amount: 450.25,
      date: '21/10/2024 01:03:22 PM',
      status: 'Cancelled',
    },
    {
        id: 2,
        name: 'Pallav Kumar Nayak',
        address: 'Ground Floor, Indiqube #213, HSR Layout, Bangalore',
        amount: 450.25,
        date: '21/10/2024 01:03:22 PM',
        status: 'Completed',
      },
    // Add more orders here if needed
  ]);

  const filteredOrders = orders.filter((order) =>
    order.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Search and Filter Bar */}
      <div className="w-full max-w-md mb-4 flex items-center bg-white rounded-lg shadow p-2">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Order"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow p-2 focus:outline-none"
        />
        <button className="ml-2 p-2 bg-gray-200 rounded-lg">
          <FilterListIcon />
        </button>
      </div>

      {/* Orders List */}
      <div className="w-full max-w-xl space-y-4"> {/* Updated width */}
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white p-4 rounded-lg shadow-lg flex flex-col"
          >
            <div className="flex justify-between">
              <div>
                <p className="font-bold">{order.date}</p>
                <p>{order.name}</p>
                <p>{order.address}</p>
              </div>
              <div className="text-right">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm ${
                    order.status === 'Completed'
                      ? 'bg-green-200 text-green-800'
                      : order.status === 'In Progress'
                      ? 'bg-yellow-200 text-yellow-800'
                      : 'bg-red-200 text-red-800'
                  }`}
                >
                  {order.status}
                </span>
                <p className="mt-2 text-black font-bold">Amount: Rs {order.amount.toFixed(2)}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <button className="text-blue-500 hover:underline">View on map</button>
              <button className="text-blue-500 hover:underline">Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
