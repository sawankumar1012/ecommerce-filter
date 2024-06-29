import { createContext } from "react";

const ShoppingProductsContext = createContext()


export const Context = ({children})=>{
    return(
    <ShoppingProductsContext.Provider >
        {children}
        </ShoppingProductsContext.Provider>
    )
}