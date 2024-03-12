import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {ShopContext} from '../Context/Shopcontext' 
import Breadc from '../Components/Breadcrums/Breadc'
import ProductD from '../Components/Productdisplay/ProductD'
import Related from '../Components/Related/Related'
   const Product = () => {
    const {all_product}=useContext(ShopContext)
    const{productID}=useParams()
    const product=all_product.find((e)=>e.id===Number(productID))
  return (
    <div>
      <Breadc product={product}></Breadc>
      <ProductD product={product}></ProductD>
       <Related/>
    </div>
  )
}
export default Product