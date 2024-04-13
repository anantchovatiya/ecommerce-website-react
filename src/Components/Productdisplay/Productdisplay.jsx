import React, { useContext } from "react";
import "./Productdisplay.css";
import Rating from "../Assets/star.png";
import { ShopContext } from "../../Context/ShopContext";

const Productdisplay = (props)=>{
    const product = props.product;
    const {addToCart} = useContext(ShopContext);
    return(
        <div className="prodis">
            <div className="pdleft">
                <div className="imglist">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="pdimg">
                    <img src={product.image} alt="" />
                </div>
            </div>
            <div className="pdright">
                <h1>{product.name}</h1>
                <div className="rating">
                    <img src={Rating} alt="" />
                </div>
                <div className="pd-right-prices">
                    <div className="pd-right-oldprice">Rs.{product.old_price}</div>
                    <div className="pd-right-newprice">Rs.{product.new_price}</div>
                </div>
                <div className="pd-size">
                    <h1>Select Size</h1>
                    <div className="pd-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            </div>

        </div>
    )
}

export default Productdisplay;