import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CategorySection from './CategorySection';
import PropertySection from './PropertySection';
import { Menu, MenuItem, IconButton, Avatar } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const mockData = {
  Beach: [
    { id: 1, title: 'Luxury Beach Villa', 
    image: 'https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, title: 'The Cozy Nest', 
    image: 'https://images.unsplash.com/photo-1679939153947-4a12c7f85543?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlyYm5iJTIwcHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 3, title: 'Urban Oasis', 
    image: 'https://plus.unsplash.com/premium_photo-1687960117014-f6463f5b419a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFpcmJuYiUyMHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D' },
    { id: 4, title: 'Sunny Retreat', 
    image: 'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFpcmJuYiUyMHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D' },
    { id: 5, title: 'Charming Cottage', 
    image: 'https://images.unsplash.com/photo-1597799029342-ab2546a93ec6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFpcmJuYiUyMHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D' },
    { id: 6, title: 'Seaside Serenity', 
    image: 'https://images.unsplash.com/photo-1719297491193-5fd6a4d04467?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGFpcmJuYiUyMHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D' },
  ],
  Cabins: [
    { id: 7, title: 'Mountain Haven', 
    image: 'https://images.unsplash.com/photo-1619317190381-643a6b28d6e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGFpcmJuYiUyMHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D' },
    { id: 8, title: 'Modern Loft', 
    image: 'https://plus.unsplash.com/premium_photo-1687996107376-20005edd18fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGFpcmJuYiUyMHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D' },
    { id: 9, title: 'Historic Hideaway', 
    image: 'https://plus.unsplash.com/premium_photo-1689609950047-b15c3d49b99d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGFpcmJuYiUyMHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D' },
    { id: 10, title: 'Rustic Escape', 
    image: 'https://images.unsplash.com/photo-1659720879449-486f7836c9aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGFpcmJuYiUyMHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D' },
    { id: 11, title: 'Elegant Suite', 
    image: 'https://images.unsplash.com/photo-1662180285335-862ed4faa619?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 12, title: 'Countryside Charm', 
    image: 'https://images.unsplash.com/photo-1601836743857-4d1e6da20a32?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ],
  Pools: [
    { id: 13, title: 'The Tranquil Cottage', 
    image: 'https://images.unsplash.com/photo-1711114435495-76503f9f3181?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 14, title: 'City Chic', 
    image: 'https://images.unsplash.com/photo-1679939153947-4a12c7f85543?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlyYm5iJTIwcHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 15, title: 'Lakeside Lodge', 
    image: 'https://images.unsplash.com/photo-1719299225324-301bad5c333c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 16, title: 'Garden Getaway', 
    image: 'https://images.unsplash.com/photo-1629127498670-687cb87dd861?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 17, title: 'Stylish Sanctuary', 
    image: 'https://images.unsplash.com/photo-1711110065992-6d6aff9ae35c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 18, title: 'Beachside Bliss', 
    image: 'https://images.unsplash.com/photo-1666307578906-164f8887a839?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ],
  Homes: [
    { id: 19, title: 'Garden View Retreat', 
    image: 'https://plus.unsplash.com/premium_photo-1683649964203-baf13fa852e4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 20, title: 'Starlight Haven', 
    image: 'https://images.unsplash.com/photo-1597799029342-ab2546a93ec6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFpcmJuYiUyMHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D' },
    { id: 21, title: 'Beachfront Bliss ', 
    image: 'https://plus.unsplash.com/premium_photo-1687960117014-f6463f5b419a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFpcmJuYiUyMHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D' },
    { id: 22, title: 'Artisan’s Abode', 
    image: 'https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 23, title: 'Charming Chalet', 
    image: 'https://images.unsplash.com/photo-1679939153947-4a12c7f85543?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlyYm5iJTIwcHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 24, title: 'The Tranquil Loft', 
    image: 'https://images.unsplash.com/photo-1719299225311-efbb3480aae0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ],
  Apartments: [
    { id: 25, title: 'The Urban Loft', 
    image: 'https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 26, title: 'Countryside Bliss', 
    image: 'https://images.unsplash.com/photo-1679939153947-4a12c7f85543?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlyYm5iJTIwcHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 27, title: 'Sunny Side Up', 
    image: 'https://plus.unsplash.com/premium_photo-1687960117014-f6463f5b419a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFpcmJuYiUyMHByb3BlcnRpZXN8ZW58MHx8MHx8fDA%3D' },
    { id: 28, title: 'The Enchanted Hideout', 
    image: 'https://plus.unsplash.com/premium_photo-1686167993442-ee5eaab0394f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 29, title: 'Vista View Retreat', 
    image: 'https://images.unsplash.com/photo-1684182309189-a1384f3d7d4c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 30, title: 'The Serene Studio',
    image: 'https://images.unsplash.com/photo-1659720879386-923f2a19f19e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ],
};

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Beach');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(mockData['Beach']);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = Object.values(mockData).flat().filter(property =>
      property.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProperties(filtered);
    console.log('Search query:', query);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFilteredProperties(mockData[category] || []);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex flex-col items-center font-sans">
      <header className="w-full p-4 bg-white shadow flex items-center justify-between">
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="Airbnb Logo" className="h-8 mr-4" />
          <span className="text-xl font-semibold">STAYS</span>
          <div className="flex items-center space-x-4">
            <IconButton onClick={handleMenuOpen} style={{ padding: 0 }}>
              <Avatar>
                <AccountCircle />
              </Avatar>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
              <MenuItem onClick={handleMenuClose}>Sign In</MenuItem>
              <MenuItem onClick={handleMenuClose}>Help</MenuItem>
            </Menu>
          </div>
        </div>
      </header>
      <div className="w-full p-4 bg-white shadow">
        <div className="max-w-7xl mx-auto">
          <SearchBar onSearch={handleSearch} />
          <CategorySection
            onSelectCategory={handleCategorySelect}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
      <main className="w-full flex flex-col items-center mt-6">
        {searchQuery ? (
          <PropertySection title="Search Results" properties={filteredProperties} />
        ) : (
          <PropertySection
            title={selectedCategory}
            properties={filteredProperties}
          />
        )}
      </main>
    </div>
  );
};

export default HomePage;
