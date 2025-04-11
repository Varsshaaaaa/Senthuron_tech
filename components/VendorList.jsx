const vendors = new Array(12).fill({
    name: "Event planner name",
    location: "Bengaluru, Karnataka",
    services: ["Event Albums", "Full-Service Planning"]
  });
  
  const VendorList = () => (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {vendors.map((vendor, i) => (
        <div key={i} className="border rounded-xl p-4 shadow-lg bg-white">
          <h3 className="font-bold">{vendor.name}</h3>
          <p>{vendor.location}</p>
          <ul className="text-sm text-gray-600">
            {vendor.services.map((s, idx) => <li key={idx}>• {s}</li>)}
          </ul>
          <button className="mt-4 btn btn-outline">Request Pricing</button>
        </div>
      ))}
    </section>
  );
  
  export default VendorList;
  