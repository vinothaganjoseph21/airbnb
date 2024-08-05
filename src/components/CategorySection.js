// import React from 'react';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';
// import CabinIcon from '@mui/icons-material/Cabin';
// import PoolIcon from '@mui/icons-material/Pool';
// import HomeIcon from '@mui/icons-material/Home';
// import ApartmentIcon from '@mui/icons-material/Apartment';

// const categories = [
//   { name: 'Beach', icon: <BeachAccessIcon /> },
//   { name: 'Cabins', icon: <CabinIcon /> },
//   { name: 'Pools', icon: <PoolIcon /> },
//   { name: 'Homes', icon: <HomeIcon /> },
//   { name: 'Apartments', icon: <ApartmentIcon /> },
// ];

// const CategorySection = () => {
//   return (
//     <div className="flex justify-center space-x-6 mt-6">
//       {categories.map((category) => (
//         <div key={category.name} className="flex flex-col items-center">
//           <div className="bg-gray-200 p-3 rounded-full">{category.icon}</div>
//           <span className="mt-2">{category.name}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategorySection;
import React from 'react';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import CabinIcon from '@mui/icons-material/Cabin';
import PoolIcon from '@mui/icons-material/Pool';
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';

const categories = [
  { name: 'Beach', icon: <BeachAccessIcon /> },
  { name: 'Cabins', icon: <CabinIcon /> },
  { name: 'Pools', icon: <PoolIcon /> },
  { name: 'Homes', icon: <HomeIcon /> },
  { name: 'Apartments', icon: <ApartmentIcon /> },
];

const CategorySection = ({ onSelectCategory, selectedCategory }) => {
  return (
    <div className="flex flex-wrap justify-center space-x-6 mt-6">
      {categories.map((category) => (
        <div
          key={category.name}
          className={`flex flex-col items-center cursor-pointer ${
            selectedCategory === category.name ? 'text-blue-500' : ''
          }`}
          onClick={() => onSelectCategory(category.name)}
        >
          <div className="bg-gray-200 p-3 rounded-full">{category.icon}</div>
          <span className="mt-2">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
