import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { Storecontext } from '../../context/Storecontext'

function FoodItem({ id, name, price, description, image }) {

  const [CountItem, SetCountItem] = useState(0)
  const [cardItems , addToCart  , removeFromCart ] = useContext(Storecontext)

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt='food-item-image' />
        {
          !CountItem
            ? <img className='add' onClick={() => SetCountItem(prev => prev + 1)} src={assets.add_icon_white} />
            : <div className='food-item-counter'>
               <img  onClick={()=>SetCountItem(prev=>prev-1)} src={assets.remove_icon_red} />
               <p>{CountItem}</p>
               <img onClick={()=>SetCountItem(prev=>prev+1)} src={assets.add_icon_green}/>
            </div>

        }


      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts}></img>
        </div>
        <div className="food-item-desc">{description}</div>
        <div className="food-item-price">${price}</div>

      </div>

    </div>
  )
}

export default FoodItem