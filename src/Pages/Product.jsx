import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import Productdisplay from "../Components/Productdisplay/Productdisplay";

const Product = ()=>{
    const all_product = useContext(ShopContext).allproducts;
    const productID = parseInt(useParams().productID);
    const product = all_product.find((e)=> e.id === productID);
    return(
        <>
            <Breadcrums product={product}/>
            <Productdisplay product={product}/>
        </>
    )
}
export default Product;