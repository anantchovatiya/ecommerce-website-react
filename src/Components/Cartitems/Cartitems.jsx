import React, { useContext } from "react";
import "./Cartitems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove from "../Assets/delete.png";
const Cartitems = ()=>{
    const {getcarttotal,allproducts,cartItems,removeToCart} = useContext(ShopContext);
    return(
        <div className="cartitems">
            <div className="formatmain">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {allproducts.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return <div>
                                <div className="cd-format formatmain">
                                <img src={e.image} alt="" className="carticon" />
                                <p>{e.name}</p>
                                <p>Rs. {e.new_price}</p>
                                <button className="cart-quantity">{cartItems[e.id]}</button>
                                <p>Rs. {e.new_price * cartItems[e.id]}</p>
                                <img src={remove} onClick={()=>{removeToCart(e.id)}} className="remove" alt="" />

                                </div>
                                <hr/>
                            </div>
                }
                else{
                    return null;
                }
            })}
            <div className="cart-down">
                <div className="cart-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cart-total-items">
                            <p>Subtotal</p>
                            <p>Rs. {getcarttotal()}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-items">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-total-items">
                            <h3>Total</h3>
                            <h3>Rs. {getcarttotal()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="promo">
                    <p>If you have a promo code ?</p>
                    <div className="promobox">
                        <input type="text" placeholder="promocode"/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cartitems;