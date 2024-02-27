import { createContext } from "react";
import { useState } from "react";
 
export const Ecommerce=createContext()



export function ContextWrapper(props){
    const [login,setLogin]=useState(false)
return(
    <Ecommerce.Provider value={{login,setLogin}}>
    {props.children}
    </Ecommerce.Provider>
)
}