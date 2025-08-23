import { createContext, useEffect } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";



export const Storecontext = createContext(null)

const StorecontextProvider = (props) => {

    const [cartItems, setcartItems] = useState({})

    const addToCart = (itemid) => {
        if (!cardItems[itemsId]) {
            setcartItems((prev) => ({ ...prev, [itemid]: 1 }))
        } else {
            setcartItems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }))
        }
    }


    const removeFromCart = () => {
        setcartItems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }))
    }


    useEffect(()=>{
     console.log(cartItems)
    } , [cartItems])

    const ContextValue = {
        food_list,
        cartItems,
        setcartItems,
        addToCart,
        removeFromCart
    }

    return (
        <Storecontext.Provider value={ContextValue}>
            {props.children}
        </Storecontext.Provider>
    )

}


export default StorecontextProvider