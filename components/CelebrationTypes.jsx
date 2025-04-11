import React from 'react';

const CelebrationTypes = () => (
  <section className="p-6">
    <h2 className="text-xl font-semibold mb-4">Explore by Celebration</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {['Birthdays', 'Weddings', 'Baby Showers', 'Corporate Events'].map(type => (
        <div key={type} className="p-4 bg-yellow-100 rounded text-center">{type}</div>
      ))}
    </div>
    <div className="mt-4 text-center bg-red-100 py-2 rounded">
      20% Off for 1st birthday events
    </div>
  </section>
);

export default CelebrationTypes;