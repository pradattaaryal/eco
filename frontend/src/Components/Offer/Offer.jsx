import React from 'react'
import './Offer.css'
import exclusive_image from '../Assets/exclusive_image.png'


const Offer = () => {
  return (
    <div className='offer'>
        <div className="offer-l">
            <h1>Exclusice</h1>
            <h1>Offer For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
            
        </div>
        <div className="offer-r">
            <img className="one" src={exclusive_image} alt="" /></div> 
               
    </div>

  )
}
export default Offer