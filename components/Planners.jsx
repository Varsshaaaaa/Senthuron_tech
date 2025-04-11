import React from 'react';

const Planners = () => (
  <section className="p-6">
    <h2 className="text-xl font-semibold mb-4">Top Rated Planners</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {["Wedding Planners", "Corporate Planners", "Corporate Planners"].map((title, i) => (
        <div key={i} className="p-4 bg-green-100 rounded text-center">{title}</div>
      ))}
    </div>
  </section>
);

export default Planners;