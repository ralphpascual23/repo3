import React from 'react';
import watch1 from './assets/images/watch1.jpg';
import watch2 from './assets/images/watch2.jpg';
import watch3 from './assets/images/watch3.jpg';
import watch4 from './assets/images/watch4.jpg';
import watch5 from './assets/images/watch5.jpg';
import watch6 from './assets/images/watch6.jpg';
import watch7 from './assets/images/watch7.jpg';
import watch8 from './assets/images/watch8.jpg';


// Import other images as needed
function Body({ watches }) {
  const getImage = (model) => {
    switch (model.toLowerCase()) {
      case 'speedmaster chronograph':
        return watch1;
      case 'prx powermatic 80':
        return watch2;
      case 'chronomat gmt 40':
        return watch3;
      case 'classic avi':
        return watch4;
      case 'speedmaster racing chronograph':
        return watch5;
      case 'ssb425p1':
        return watch6;
      case 'prx':
        return watch7;
      case '5':
        return watch8;
      
      default:
        return null;
    }
  };

  return (
    <main>
      <h1>Watches</h1>
      <p>{watches.length} results</p>
      <div className="watch-grid">
        {watches.map(watch => (
          <div className="watch-card" key={watch.id}>
            <img src={getImage(watch.model)} alt={`${watch.brand} ${watch.model}`} />
            <h2>{watch.brand}</h2>
            <p>{watch.model}</p>
            <p>{watch.type}</p>
            <p>{watch.dial} Dial</p>
            <p>${watch.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Body;

