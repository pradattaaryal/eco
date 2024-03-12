import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_icon from '../Assets/hero_image.png'
 const Hero = () => {
  return (
    <div className='Hero'>
        <div className="heroLeft">
            <h2>NEW ARRIVAL ONLY</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
              
            <button className='btn'><span>latest collection</span>
            <img src={arrow_icon} alt="" />
            </button>
        </div>
        <div className="heroRight">
            <img src={hero_icon} alt="" />
        </div>
    </div>
  )
}
export default Hero