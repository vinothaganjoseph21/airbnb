import React from 'react';

const PropertySection = ({ title, properties }) => {
  return (
    <section className="w-full mt-6 p-4 bg-white shadow">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="flex flex-wrap justify-center">
        {properties.length === 0 ? (
          <p className="text-gray-500">No properties available</p>
        ) : (
          properties.map((property) => (
            <div
              key={property.id}
              className="w-1/3 p-2 box-border"
            >
              <div className="bg-gray-200 rounded-lg overflow-hidden h-80">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-3/4 object-cover"
                />
                <div className="p-2 h-1/4 flex items-center">
                  <h3 className="text-lg font-medium">{property.title}</h3>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default PropertySection;

