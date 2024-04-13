import React, { createContext, useState } from "react";
import allproducts from "../Components/Assets/allproducts";

export const ShopContext = createContext(null);
const getdefaultcart = ()=>{
    let cart = {};
    for (let index = 0; index < allproducts.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}


const ShopContextProvider = (props)=>{
    const [cartItems,setcartItems] = useState(getdefaultcart());
    const getcarttotal = ()=>{
        let total = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let Iteminfo = allproducts.find((product)=>product.id===Number(item));
                total += Iteminfo.new_price * cartItems[item];
            }
        }
        return total;
    }
    const gettotalcartitems = ()=>{
        let totitem = 0;
        for(const item in cartItems)
        {
            totitem += cartItems[item];
        }
        return totitem;
    }
    const addToCart = (itemID)=>{
        setcartItems((prev)=>({...prev,[itemID]:parseInt(prev[itemID]+1)}))
        console.log(cartItems)
    }
    const removeToCart = (itemID)=>{
        setcartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
    }
    const contextValue = {gettotalcartitems,getcarttotal,allproducts,cartItems,addToCart,removeToCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;