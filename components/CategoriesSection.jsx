const CategoriesSection = () => {
    const categories = [
      {
        name: "Weddings",
        image: "/assets/categories/w.jpeg",
      },
      {
        name: "Birthdays",
        image: "/assets/categories/b.jpeg",
      },
      {
        name: "Baby Showers",
        image: "/assets/categories/bs.jpeg",
      },
      {
        name: "Corporate Events",
        image: "/assets/categories/c.jpeg",
      },
    ];
  
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
            Explore Our Event Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-56 sm:h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <span className="text-white text-xl sm:text-2xl font-semibold tracking-wide">
                    {category.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CategoriesSection;
  