import React from 'react'
import { assets } from '../../assets/assets'

export const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className="footer-content-left">
          <img src={assets.logo}></img>
          <p></p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>

        </div>
        <div className="footer-content-center">

          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>

        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>

          <ul>
            <li>0300-111133355</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>

      </div>
      <p className='footer-copy-right'> Copy Right 2024 @Tomato.com - All Rights Reserved</p>
    </div>
  )
}
