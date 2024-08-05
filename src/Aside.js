import React, { useState } from 'react';

function Aside({ onFilter }) {
  const [filters, setFilters] = useState({
    quartz: false,
    chronograph: false,
    automatic: false,
    blueDial: false,
    blackDial: false,
    whiteDial: false,
    tissot: false,
    seiko: false,
    breitling: false,
    omega: false
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, [name]: checked };
      onFilter(updatedFilters);
      return updatedFilters;
    });
  };

  const clearFilters = () => {
    const clearedFilters = {
      quartz: false,
      chronograph: false,
      automatic: false,
      blueDial: false,
      blackDial: false,
      whiteDial: false,
      tissot: false,
      seiko: false,
      breitling: false,
      omega: false
    };
    setFilters(clearedFilters);
    onFilter(clearedFilters);
  };

  return (
    <aside>
      <label><input type="checkbox" name="quartz" checked={filters.quartz} onChange={handleChange} /> Quartz</label>
      <label><input type="checkbox" name="chronograph" checked={filters.chronograph} onChange={handleChange} /> Chronograph</label>
      <label><input type="checkbox" name="automatic" checked={filters.automatic} onChange={handleChange} /> Automatic</label>
      <label><input type="checkbox" name="blueDial" checked={filters.blueDial} onChange={handleChange} /> Blue Dial</label>
      <label><input type="checkbox" name="blackDial" checked={filters.blackDial} onChange={handleChange} /> Black Dial</label>
      <label><input type="checkbox" name="whiteDial" checked={filters.whiteDial} onChange={handleChange} /> White Dial</label>
      <label><input type="checkbox" name="tissot" checked={filters.tissot} onChange={handleChange} /> Tissot</label>
      <label><input type="checkbox" name="seiko" checked={filters.seiko} onChange={handleChange} /> Seiko</label>
      <label><input type="checkbox" name="breitling" checked={filters.breitling} onChange={handleChange} /> Breitling</label>
      <label><input type="checkbox" name="omega" checked={filters.omega} onChange={handleChange} /> Omega</label>
      <button onClick={clearFilters}>Clear</button>
    </aside>
  );
}

export default Aside;
