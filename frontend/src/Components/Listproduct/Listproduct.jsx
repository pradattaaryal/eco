import React, { useEffect, useState } from 'react';
import cross_icon from '../Assets/cross_icon.png';
import './Listproduct.css';

const Listproduct = () => {
  const [allproduct, setAllProduct] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:4000/allproduct');
      const data = await response.json();
      setAllProduct(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    try {
      await fetch('http://localhost:4000/removeproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
      });
    } catch (error) {
      console.error('Error removing product:', error);
    }
    await fetchInfo();
  };

  return (
    <div className="listproduct">
      <h1>AllProduct List</h1>
      <div className="lp">
        <p>Product</p>
        <p>Title</p>
        <p>Old price</p>
        <p>New price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-all">
        <hr />
        {allproduct.map((product, index) => (
          <React.Fragment key={index}>
            <div className="lp listproductformat">
              <img src={product.image} alt="" className="lp-icon" />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img
                src={cross_icon}
                alt=""
                className="lp_removeicon"
                onClick={() => removeProduct(product.id)}
              />
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Listproduct;
