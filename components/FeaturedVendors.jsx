import React from 'react';

const FeaturedVendors = () => (
  <section className="p-6 bg-gray-50">
    <h2 className="text-xl font-semibold mb-4">Featured Vendors</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-white p-4 shadow rounded">
          <h3 className="font-bold">Hilton Motif Seattle</h3>
          <button className="text-blue-500 mt-2">Know More</button>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedVendors;
