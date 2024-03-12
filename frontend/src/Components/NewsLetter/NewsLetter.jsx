import React from 'react'
import './NewsLetter.css'

 const NewsLetter = () => {
  return (
    <div className='newsLetter'>
      <h1>Get Exclusive Offer On your Email</h1>
      <p>subscibe to our nresetter and stay updated</p>
    <div>
    <input type="email" placeholder='Your Email id' />
    <button>Subscibe</button>
    </div>
    </div>
  )

}
export default NewsLetter