import React from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'

function Navbar() {
  return (
    <div className='app-navbar'>
       <img src= {assets.logo} className='logo'></img>
        <ul className="navbar-menu">
          <li>Home</li>
          <li>Menu</li>
          <li>Mobile-App</li>
          <li>Contact Us</li>
        </ul>

        <div className='navbar-right'>
           <img src={assets.search_icon}/>
            <div className="navbar-search-div">
              <img src={assets.basket_icon}/>
               <div className="dot"></div>
            </div>
             <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar
