import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import add_product from '../Assets/Product_Cart.svg';
import list_product from '../Assets/Product_list_icon.svg';

const Sidebar = () => {
  return (
    <div className='sidebar'>
   <Link to='/admin/addproduct' style={{ textDecoration: 'none' }}>
  <div className='siderbar-item'>
    <img src={add_product} alt='' />
    <p>Add Product</p>
  </div>
</Link>
<Link to='/admin/listproduct' style={{ textDecoration: 'none' }}>
  <div className='siderbar-item'>
    <img src={list_product} alt='' />
    <p>Product List</p>
  </div>
</Link>
    </div>
  );
};


export default Sidebar;
