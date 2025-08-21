import { createContext } from "react";
import { food_list } from "../assets/assets";



export const Storecontext = createContext(null)

const StorecontextProvider = (props)=>{

    const ContextValue = {
        food_list
    }
    return(
        <Storecontext.Provider value={ContextValue}>
           {props.children}
        </Storecontext.Provider>
    )

}


export default StorecontextProvider