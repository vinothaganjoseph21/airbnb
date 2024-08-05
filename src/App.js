// import React from 'react';
// import Button from '@mui/material/Button';

// function App() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold text-blue-600">Hello, Tailwind CSS and MUI!</h1>
//       <Button variant="contained" color="primary" className="mt-4">
//         MUI Button
//       </Button>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import HomePage from './components/HomePage';
import './index.css';  // Ensure Tailwind CSS styles are applied

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
