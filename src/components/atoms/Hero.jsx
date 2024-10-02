import React from "react"
import HeroImg from "../../Pictures/HERO.png"
import Styles from "./Hero.module.css"
const Hero = () => {
    return (
        <>

            <img src={HeroImg} alt="" className={Styles.HeroStyling} />


        </>
    )

}

export default Hero