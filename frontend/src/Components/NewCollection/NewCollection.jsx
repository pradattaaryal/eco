 
import React, { useEffect, useState } from 'react';
import './NewCollection.css';
import Item from '../Item/Item';

const NewCollection = () => {
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    fetch('https://ec-backend-1.onrender.com/newcollection')
      .then(response => response.json())
      .then(data => setNewCollection(data))
      .catch(error => console.error('Error fetching new collection:', error));
  }, []);

  return (
    <div className="NewCollection">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {newCollection.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={`https://ec-backend-1.onrender.com/images/${item.image}`} // Adjusted image URL
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
