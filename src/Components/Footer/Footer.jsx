import React from "react";
import "./Footer.css";
import logo from "../Assets/logo.jpg"
const Footer = ()=>{
    return(
    <div className="footer">
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <p>Made By Anant Chovatiya</p>
        <p>@Copyright 2024</p>

    </div>
    )
}

export default Footer;