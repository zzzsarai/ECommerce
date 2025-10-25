import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import DonutBanner from '../components/DonutBanner';
import SearchBar from '../components/SearchBar';
import Catalog from '../components/Catalog';
import Footer from '../components/Footer';

function Homepage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
  };

  return (
    <div>
      <HeroSection />
      <DonutBanner />

      {/* Search Bar */}
      <div className="p-4 flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </div>

      {searchQuery && (
        <p className="text-center text-gray-700 mb-4">
          You searched for: <strong>{searchQuery}</strong>
        </p>
      )}

      {/* Pass searchQuery to Catalog */}
      <Catalog searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}

export default Homepage;
