import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = (props)=>{

    return(
        <div className="item">
            <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
            <p>{props.name}</p>
            <div className="price">
                <div className="newprice">
                    Rs. {props.newprice}
                </div>
                <div className="oldprice">
                    Rs. {props.oldprice}
                </div>
            </div>
        </div>
    )
}

export default Item;