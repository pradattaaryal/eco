import React, { useContext } from 'react'
import './Cartitem.css'
import { ShopContext } from '../../Context/Shopcontext'
import remove_icon  from '../Assets/cart_cross_icon.png'
const Cartitem = () => {
    const {all_product,cartitem,removecart,gettotal}=useContext(ShopContext)
  return (
    <div className='cartitem'> 
    <div className="cartitem-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
    </div>
    <hr />
    {all_product.map((e)=>{
      if(cartitem[e.id]>0){
        return<div>
        <div className="cartitem-format cartitem-format-main">
            <img src={e.image} alt="" className='carticon-product-icon'/>
            <p>{e.name}</p>
            <p>{e.new_price}</p>
            <button className='cartitem-quantity'>{cartitem[e.id]}</button>
            <p>${e.new_price*cartitem[e.id]}</p>
            <img className="remoove-icon" src={remove_icon} onClick={()=>{removecart(e.id)}} alt="" />
            
        </div>
    </div>
    }return null;
    }
    )
    }
    <div className="cartitem-down">
      <div className="cartitem-total">
        <h1>cart Total</h1>
        <div>
          <div className="cartitem-total-item">
            <p>subtotal</p>
            <p>${gettotal()}</p>
          </div>
          <hr />
          <div className="cartitem-total-item">
            <p>Shippinf fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartitem-total-item">
            <h3>Total</h3>
            <h3>${gettotal()}</h3>
          </div>
        </div>
        <button> PROCEED TO CHECKOUT</button>
      </div>

    </div>
    </div>
  )
}

export default Cartitem
