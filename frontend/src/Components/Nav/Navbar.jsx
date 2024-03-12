import React from 'react'
 
import x from '../Assets/x.jpg'

import './Navbar.css'
 
const Navbar = () => {
  return (
    <><div className='navbar'>
        <div className='navlogo'>Clothify</div>
        <img src={x} alt="" className='navprofile' />
    </div></>
  )
}

export default Navbar
 