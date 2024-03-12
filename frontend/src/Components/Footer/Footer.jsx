import React from 'react'
import './Footer.css'
import fotter_logo from '../Assets/logo_big.png'
import insta from '../Assets/instagram_icon.png'
import pin from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'


 const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerLogo">
            <img src={fotter_logo} alt="" />
            <h1>Clothify</h1>
        </div>
        <ul className="footerLink">
            <li>Company</li>
            <li>Product</li>
            <li>Officer</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footersicon">
            <div className="footericoncontainer">
                <img src={insta} alt="" />
            </div>
            <div className="footericoncontainer">
                <img src={pin} alt="" />
            </div>
            <div className="footericoncontainer">
                <img src={whatsapp} alt="" />
            </div>
        </div>
    <div className="footercopyright">
        <hr />
        <p>Copyright @ 2023 - All RIght Reserved</p>
    </div>
    </div>
  )
}
export  default Footer