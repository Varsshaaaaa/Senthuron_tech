import React from 'react';

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
    <div className="text-xl font-bold">LetsGala</div>
    <ul className="flex gap-4 text-sm">
      <li>All Vendors</li>
      <li>Weddings</li>
      <li>Birthdays</li>
      <li>Baby Showers</li>
      <li>Corporate Events</li>
      <li className="text-blue-500 font-semibold cursor-pointer">Become a Member</li>
    </ul>
  </nav>
);

export default Navbar;