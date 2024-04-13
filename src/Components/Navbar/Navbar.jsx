import React, { useContext, useState } from "react";
import './Navbar.css';
import logo from '../Assets/logo.jpg'
import cart from '../Assets/shopping-cart.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = ()=>{
    const [menu,setmenu] = useState("shop");
    const {gettotalcartitems} = useContext(ShopContext);

    return(
        <>
            <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <span>SHOPPER</span>
            </div>
            <div className="nav">
                <ul>
                    <li onClick={()=>setmenu("shop")}> <Link style={{textDecoration: "none",color: "black"} } to="/">Shop</Link>  {menu==="shop"?<hr/>:<></>}</li>
                    <li onClick={()=>setmenu("men")}><Link style={{textDecoration: "none",color: "black"} } to="/mens">Mens</Link> {menu==="men"?<hr/>:<></>}</li>
                    <li onClick={()=>setmenu("women")}><Link style={{textDecoration: "none",color: "black"} } to="/womens">Women</Link> {menu==="women"?<hr/>:<></>}</li>
                    <li onClick={()=>setmenu("kids")}><Link style={{textDecoration: "none",color: "black"} } to="/kids">Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
                </ul>
            </div>
            <div className="cart">
                <Link to={"/cart"}><img src={cart} alt="" /></Link>
                <div className="cart-count">{gettotalcartitems()}</div>
            </div>
            </div>
        </>
    )
}
export default Navbar;