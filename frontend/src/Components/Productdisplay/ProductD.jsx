import React, { useContext } from 'react'
import './ProductD.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext} from '../../Context/Shopcontext'

const ProductD = (props) => {
    const {product}=props
    const{addcart}=useContext(ShopContext)
  const imageUrl = `https://eco-backend-boxa.onrender.com/images/${product.image}`;

  return (
    <div className='productdisplay'>
        <div className="product-left">
            <div className="product-img-list">
                <img src={product.image} alt=""></img>
                <img src={product.image} alt=""></img>
                <img src={product.image} alt=""></img>
                <img src={product.image} alt=""></img>

            </div>
            <div className="product-image">
                <img  className="probuct-display-main" src={imageUrl} alt="" />
            </div>
        </div>
        <div className="product-right">
            <h1>{product.name}</h1>
            <div className="star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="product-right-prices">
                <div className="product-right-oldprice">${product.old_price}</div>
                <div className="product-right-newprice">${product.new_price}</div>

            </div>
            <div className="product-right-des">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit animi itaque aut quaerat ipsa illo 
             corporis qui, optio a temporibus
            repellendus facere cumque sit assumenda alias quo ea ullam modi. Mollitia cum distinctio ab hic?   
            </div>
            <div className="product-right-size">
                <h1>Select Size</h1>
                <div className="product-sizes">
                    <div> S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>

                </div>
            </div>
            <button onClick={()=>{addcart(product.id)}}> ADD TO CART</button>
            <p className='product-category'><span>Category:</span>Women,Shirt,crop Top</p>
            <p className='product-category'><span>Tags:</span>Modern,Leatest</p>

        </div>
    </div>
  )
}

export default ProductD
