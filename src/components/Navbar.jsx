import React from 'react'

const Navbar = ({ cartCount }) => {
  return (
    <div className="bg-white px-6 py-4 shadow flex justify-between items-center">
      <h1 className="text-lg font-semibold text-gray-800">React Shop 🛍️</h1>
      <div className="relative">
        <span className="text-sm text-gray-600">Cart 🛒</span>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
            {cartCount}
          </span>
        )}
      </div>
    </div>
  );
}

export default Navbar;
