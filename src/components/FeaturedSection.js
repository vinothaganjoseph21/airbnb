// // // src/components/FeaturedSection.jsx
// // import React from 'react';

// // const FeaturedSection = ({ title, items }) => {
// //   return (
// //     <div className="max-w-7xl w-full p-4">
// //       <h2 className="text-2xl font-bold mb-4">{title}</h2>
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //         {items.map(item => (
// //           <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
// //             <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
// //             <div className="p-4">
// //               <h3 className="text-lg font-bold">{item.title}</h3>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FeaturedSection;

// // src/components/FeaturedSection.jsx
// import React from 'react';

// const FeaturedSection = ({ title, items }) => {
//   return (
//     <div className="max-w-7xl w-full p-4">
//       <h2 className="text-2xl font-bold mb-4">{title}</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {items.map(item => (
//           <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
//             <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h3 className="text-lg font-bold">{item.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedSection;

// src/components/FeaturedSection.jsx
import React from 'react';

const FeaturedSection = ({ title, items }) => {
  return (
    <div className="max-w-7xl w-full p-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
