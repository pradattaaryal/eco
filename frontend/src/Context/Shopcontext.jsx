import React, { createContext, useEffect, useState } from 'react';
export const ShopContext = createContext(null);




const getdefultcart=()=>
{
  let cart={};
  for(let i=0;i< 300+1;i++)
  {
    cart[i]=0;
  } 
  return cart;
}
 
const ShopContextProvider = (props) => {
  const[cartitem,setcartitem]=useState(getdefultcart())
  const [all_product,setall_product]=useState([]);
  
  useEffect(() => {
    fetch('https://eco-backend-boxa.onrender.com/allproduct')
  .then(response => response.json())
  .then(data =>setall_product(data))
  .catch(error => console.error('Error:', error));
  }, []);
  
 

  
  const addcart=(itemId)=>{
    setcartitem((prev)=>({...prev, [itemId]:prev[itemId]+1}));
    if(localStorage.getItem('auth-token')){
      fetch('https://ec-backend-64z0.onrender.com/addtocart',
     { method:'POST',
      Headers:{
        Accept:'application/formdata',
        'auth-token':`${localStorage.getItem('auth-token')}`,
        'contet-Type':'application/json',
      },
      body:JSON.stringify({'itemId':itemId}),
    })
    .then(response => response.json())
    .then(data =>console.log(data))
    }
  }
  
   
  
  const removecart=(itemId)=>{setcartitem((prev)=>({...prev, [itemId]:prev[itemId]-1}))}
   
  const gettotal=()=>
  {
   let total=0;
    for(const item in cartitem)
    {
      if(cartitem[item]>0)
      {
        let iteminfo=all_product.find((product)=>product.id===Number(item))
        total +=iteminfo.new_price * cartitem[item]
      }
      
    }return  total;
  }

  const total_no_of_item=()=>
  {
    let totalnumber=0;
    for(const no in cartitem)
    {if (cartitem[no]>0)
    {
       totalnumber +=cartitem[no]
    }
  }  

  return totalnumber;
  }



  const contextValue = { all_product,cartitem,addcart,removecart,gettotal,total_no_of_item};

  
   return (
    <>
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    </>
  );
};

export default ShopContextProvider;
