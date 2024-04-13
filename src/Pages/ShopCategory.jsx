import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = (props)=>{
    const all_product = useContext(ShopContext).allproducts;
    // Check if all_product is undefined or null before mapping over it
    if (!all_product) {
        return null; // or you can render a loading indicator or an error message
    }

    return (
        <div className="shopcat">
            <img src={props.banner} alt="" />
            <div className="shopcat-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return (
                            <Item
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                oldprice={item.old_price}
                                newprice={item.new_price}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

export default ShopCategory;
