import React from 'react';
import './CSS/Admin.css';
import Sidebar from '../Components/sidebar/Sidebar';
import Listproduct from '../Components/Listproduct/Listproduct';
import Addproduct from '../Components/Addproduct/Addproduct';
import { Routes, Route } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Addproduct />} />
        <Route path="addproduct" element={<Addproduct />} />
        <Route path="listproduct" element={<Listproduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
