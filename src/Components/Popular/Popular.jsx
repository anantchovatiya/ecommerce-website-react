import React from "react";
import "./popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";
const Popular = ()=>{

    return(
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr/>
            <div className="popular-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} oldprice={item.oldprice} newprice={item.newprice}/>
                })}
            </div>
        </div>
    )
}
export default Popular;