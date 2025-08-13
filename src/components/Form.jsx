// src/components/Form.jsx
import React from "react";
import Btn from "./Btn";

const Form = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-red-500"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-6 text-black">
          Request Web Development
        </h2>

        <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Amount (₹) *
                </label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Pay Now
              </button>
            </form>
      </div>
    </div>
  );
};

export default Form;
