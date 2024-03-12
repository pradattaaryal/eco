import React, { useState } from 'react';
import './Addproduct.css';
import upload from '../Assets/upload_area.svg';

const Addproduct = () => {

  const [image, setimage] = useState(false);
  const [productdetail, setproductdetail] = useState({
    
    name: "",
    image: "",
    category: "Women",
    new_price: "",
    old_price: ""
  });
 

  const imagehandler = (e) => {
    setimage(e.target.files[0]);
  }

  const changehandler = (e) => {
    setproductdetail({ ...productdetail, [e.target.name]: e.target.value });
  }

  const Addproduct = async () => {
      let responsedata;
    let product=productdetail;
    let formdata=new FormData();
    formdata.append('product',image)
    await fetch('http://localhost:4000/upload',{
      method:'post',
      headers:{
        Accept:'application/json',
      },
      body:formdata,
    })
    .then((resp) => resp.json())
    .then((data) => {
      responsedata = data;
    })
    .catch((error) => {
      console.error('Error during fetch:', error);
    });
    

    if(responsedata.success)
    {
      product.image = responsedata.image_url;
       console.log(product)
       await fetch('http://localhost:4000/addproduct',{
      method:'post',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(product),
       })
       .then((resp)=>resp.json())
       .then((data)=>{data.success?alert("Product Added"):alert("Failed")})

    }
  }

  return (
    <div className='addproduct'>
      <div className="addproduct-itemfields">
        <p>Product title</p>
        <input type="text" value={productdetail.name} onChange={changehandler} name='name' placeholder='Title here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfields">
          <p>Old Price</p>
          <input type="number" name='old_price' value={productdetail.old_price} onChange={changehandler} placeholder='Old price' />
        </div>
        <div className="addproduct-itemfields">
          <p>New Price</p>
          <input type="number" name='new_price' value={productdetail.new_price} onChange={changehandler} placeholder='New price' />
        </div>
      </div>
      <div className="addproduct-itemfields">
        <p>Product Category</p>
        <select name="category" value={productdetail.category} onChange={changehandler} className='addproduct-selector'>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfileds">
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload} alt="" className='upload-img' />
        </label>
        <input onChange={imagehandler} type="file" name='image' id='file-input' hidden />
      </div>
      <button onClick={()=>Addproduct()} className='addproduct-btn'>ADD PRODUCT</button>
    </div>
  )
}

export default Addproduct;
