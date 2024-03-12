import React from 'react'
import './Breadc.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadc = (props) => {
    const{product}=props
  return (
    <div className='breadc'>
        HOME <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name}
    </div>
  )
}

export default Breadc