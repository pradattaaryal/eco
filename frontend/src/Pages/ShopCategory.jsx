import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from '../Context/Shopcontext'
import drop from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
  const ShopCategory = (props) => {
    const {all_product}=useContext(ShopContext)
  return (
    <div className='shopcat'>
      <img className='shopcatbanner' src={props.banner} alt="" />
      <div className="shopcatindexsort">
        <div>
        <p>
          <span>showing 1-12</span> out of 36 product
        </p>
        </div>
        <div className="shopcatsort">
          sort by <img src={drop} alt="" />
        </div>
      </div>
      <div className="shopcat-product">
        {all_product.map((item,i)=>{
          if(props.category===item.category)
          {
            return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} ></Item>
          }
          else 
          {return null;}
        })}
      </div>
      <div className="loadm">
        Explore
      </div>
    </div>
  )
}
export default ShopCategory 