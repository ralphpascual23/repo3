import React, { useState, useEffect } from 'react';
import Header from './Header';
import Aside from './Aside';
import Body from './Body';
import './App.css';

const initialWatches = [
    { id: 1, brand: 'OMEGA', model: 'Speedmaster Chronograph', type: 'Chronograph', dial: 'Black', price: 2999.00 },
    { id: 2, brand: 'TISSOT', model: 'PRX Powermatic 80', type: 'Automatic', dial: 'Blue', price: 599.00 },
    { id: 3, brand: 'BREITLING', model: 'Chronomat GMT 40', type: 'Automatic', dial: 'Blue', price: 4199.00 },
    { id: 4, brand: 'BREITLING', model: 'Classic AVI', type: 'Chronograph', dial: 'Black', price: 2999.00 },
    { id: 5, brand: 'OMEGA', model: 'Speedmaster Racing Chronograph', type: 'Chronograph', dial: 'White', price: 999.00 },
    { id: 6, brand: 'SEIKO', model: 'SSB425P1', type: 'Chronograph', dial: 'White', price: 499.00 },
    { id: 7, brand: 'TISSOT', model: 'PRX', type: 'Quartz', dial: 'Blue', price: 399.00 },
    { id: 8, brand: 'SEIKO', model: '5', type: 'Quartz', dial: 'Black', price: 199.00 } 
];

function App() {
  const [watches, setWatches] = useState(initialWatches);
  const [filteredWatches, setFilteredWatches] = useState(initialWatches);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term === '') {
      setFilteredWatches(watches);
    } else {
      const filtered = watches.filter(watch =>
        watch.brand.toLowerCase().includes(term.toLowerCase()) ||
        watch.model.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredWatches(filtered);
    }
  };

  const handleFilter = (filters) => {
    let filtered = watches;

    if (filters.quartz) {
      filtered = filtered.filter(watch => watch.type.toLowerCase() === 'quartz');
    }
    if (filters.chronograph) {
      filtered = filtered.filter(watch => watch.type.toLowerCase() === 'chronograph');
    }
    if (filters.automatic) {
      filtered = filtered.filter(watch => watch.type.toLowerCase() === 'automatic');
    }
    if (filters.blueDial) {
      filtered = filtered.filter(watch => watch.dial.toLowerCase() === 'blue');
    }
    if (filters.blackDial) {
      filtered = filtered.filter(watch => watch.dial.toLowerCase() === 'black');
    }
    if (filters.whiteDial) {
      filtered = filtered.filter(watch => watch.dial.toLowerCase() === 'white');
    }
    if (filters.tissot) {
      filtered = filtered.filter(watch => watch.brand.toLowerCase() === 'tissot');
    }
    if (filters.seiko) {
      filtered = filtered.filter(watch => watch.brand.toLowerCase() === 'seiko');
    }
    if (filters.breitling) {
      filtered = filtered.filter(watch => watch.brand.toLowerCase() === 'breitling');
    }
    if (filters.omega) {
      filtered = filtered.filter(watch => watch.brand.toLowerCase() === 'omega');
    }

    setFilteredWatches(filtered);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <div className="content">
        <Aside onFilter={handleFilter} />
        <Body watches={filteredWatches} />
      </div>
    </div>
  );
}

export default App;

