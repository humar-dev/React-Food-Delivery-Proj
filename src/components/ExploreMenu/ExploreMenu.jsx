import React from 'react'
import { menu_list } from '../../assets/assets'

import './ExploreMenu.css'

function ExploreMenu({category , setcategory}) {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu featuring a  detectable array of dishes crafted with the finest ingredients</p>
            <div className='explore-menu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={()=>setcategory(prev => prev===item.menu_name? "ALL": item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image}></img>
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}


            </div>

            <hr/>
        </div>
    )
}

export default ExploreMenu