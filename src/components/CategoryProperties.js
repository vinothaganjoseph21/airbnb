import React from 'react';

const CategoryProperties = ({ category, properties }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold">{category}</h2>
      <div className="flex space-x-4 mt-4 overflow-x-scroll">
        {properties.map((property) => (
          <div key={property.id} className="min-w-[300px] bg-white shadow rounded-lg overflow-hidden">
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-medium">{property.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProperties;
