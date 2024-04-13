import React from "react";
import "./Breadcrums.css";
const Breadcrums = (props)=>{
    return(
        <div className="breadcrum">
            HOME{">>"}SHOP{">>"}{props.product.category}{">>"}{props.product.name}
        </div>
    )
}

export default Breadcrums;