import React from 'react'
import data_product from '../Assets/data'
import './Related.css'
import Item  from '../Item/Item'

const Related = () => {
     
  return (
    <div className='related'>
        <h1>Related Product</h1>
        <hr />
        <div className="related-item">
           {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />})}
        </div>
    </div>
  )
}

export default Related