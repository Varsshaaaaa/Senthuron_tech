import React from 'react';

const Explore = () => (
  <section className="p-6">
    <h2 className="text-xl font-semibold mb-4">Explore our Fast booking Venues</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {['Wedding', 'Birthday', 'Baby Shower', 'Corporate'].map(type => (
        <div key={type} className="p-4 bg-blue-100 rounded text-center">{type} Venues</div>
      ))}
    </div>
  </section>
);

export default Explore;