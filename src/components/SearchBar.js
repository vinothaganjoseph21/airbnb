// import React, { useState } from 'react';
// import { IconButton, InputBase, Paper } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

// const SearchBar = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     onSearch(searchTerm);
//   };

//   return (
//     <Paper
//       component="form"
//       className="flex items-center w-full p-2 rounded-full shadow-md"
//       style={{ borderRadius: 50 }}
//     >
//       <InputBase
//         className="ml-2 flex-1"
//         placeholder="Where"
//         inputProps={{ 'aria-label': 'search' }}
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{ borderRadius: 50 }}
//       />
//       <IconButton
//         type="button"
//         aria-label="search"
//         onClick={handleSearch}
//         style={{
//           backgroundColor: '#FF385C',
//           color: 'white',
//           borderRadius: '50%',
//           padding: 10,
//           marginRight: 4,
//         }}
//       >
//         <SearchIcon />
//       </IconButton>
//     </Paper>
//   );
// };

// export default SearchBar;
import React, { useState } from 'react';
import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Paper
      component="form"
      className="flex items-center w-full p-2 rounded-full shadow-md"
      style={{ borderRadius: 50 }}
    >
      <InputBase
        className="ml-2 flex-1"
        placeholder="Where"
        inputProps={{ 'aria-label': 'search' }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ borderRadius: 50 }}
      />
      <IconButton
        type="button"
        aria-label="search"
        onClick={handleSearch}
        style={{
          backgroundColor: '#FF385C',
          color: 'white',
          borderRadius: '50%',
          padding: 10,
          marginRight: 4,
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
