import React from "react";
import './Hero.css';
import Hand from "../Assets/new-product.png";
import HeroRight from "../Assets/hero.png"

const Hero = ()=>{
    return(
        <div className="hero">
            <div className="heroleft">
                <h1>New Arrivals Only</h1>
                <div className="hand">
                    <div>
                    <span>new</span>
                    <img src={Hand} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
            </div>
            <div className="heroright">
                <img src={HeroRight} alt="" />
            </div>
        </div>
    )
}
export default Hero;