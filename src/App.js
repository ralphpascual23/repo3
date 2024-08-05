import React, { useState, useEffect } from 'react';
import Header from './Header';
import Aside from './Aside';
import Body from './Body';
import './App.css';

function App() {
  const [watches, setWatches] = useState([]);
  const [filteredWatches, setFilteredWatches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/watches')
      .then(response => response.json())
      .then(data => {
        setWatches(data);
        setFilteredWatches(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
