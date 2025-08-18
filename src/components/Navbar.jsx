import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'

function Navbar() {

        const [menu ,setMenu] = useState("home")  

  return (
    <div className='app-navbar'>
       <img src= {assets.logo} className='logo'></img>
        <ul className="navbar-menu">
          {/* <li onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>Home</li>
          <li onClick={()=>setMenu("menu")} className={menu === "menu"?"active": ""}>Menu</li>
          <li onClick={()=>setMenu("mobile-App")} className={menu === "mobile-App"?"active":""}>Mobile-App</li>
          <li onClick={()=>setMenu("contact-us")} className={menu === "contact-us"? "active": ""}>Contact Us</li> */}
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
