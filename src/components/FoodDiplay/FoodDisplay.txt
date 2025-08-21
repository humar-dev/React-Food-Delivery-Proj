import React, { useContext } from 'react'
import './Fooddisplay.css'
import { Storecontext } from '../../context/Storecontext'
import FoodItem from '../FoodItem/FoodItem'

function FoodDisplay({category}) {
        
    const {food_list} = useContext(Storecontext)
  
  return (
    <div className='food-display' id='food-display'>
       <h2>Top Dishes Near You</h2>
       <div className="food-display-list">
          {  
           food_list.map((item , key)=>{
               return(
                  <FoodItem key={key} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>

               )
           })
            
          }
         
       </div>
    </div>
  )
}

export default FoodDisplay