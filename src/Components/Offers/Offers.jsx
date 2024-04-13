import React from "react";
import "./offers.css";
import offerimage from "../Assets/offer.png"
const Offers = ()=>{
    return(
        <>
            <div className="offers">
                <div className="offer-left">
                    <h1>Exclusive</h1>
                    <h1>Offers For You</h1>
                    <p>ONLY ON BEST SELLERS PRODUCTS</p>
                    <button>Check Now</button>
                </div>
                <div className="offer-right">
                    <img src={offerimage} alt="" />
                </div>
            </div>
        </>
    )
}

export default Offers;