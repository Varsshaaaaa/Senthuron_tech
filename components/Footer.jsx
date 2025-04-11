import React from 'react';

const Footer = () => (
  <footer className="bg-black text-white p-6 mt-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
      <div>
        <h3 className="font-bold mb-2">Event</h3>
        <p>Weddings</p>
        <p>Birthdays</p>
        <p>Baby Showers</p>
        <p>Corporate Events</p>
      </div>
      <div>
        <h3 className="font-bold mb-2">Event Professionals</h3>
        <p>Become a Member</p>
        <p>Contact Pro Support</p>
      </div>
      <div>
        <h3 className="font-bold mb-2">Contact</h3>
        <p>Hey@letsgala.com</p>
        <p>(406) 555-0120</p>
      </div>
      <div>
        <h3 className="font-bold mb-2">Address</h3>
        <p>2972 Westheimer Rd. Santa , 85486</p>
      </div>
    </div>
  </footer>
);

export default Footer;
