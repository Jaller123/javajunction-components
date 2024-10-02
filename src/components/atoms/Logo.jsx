import React from "react"
import LogoImg from "../../Pictures/JavaJLogo.png"
import styles from "../atoms/Logo.module.css"
const Logo = () => {
    return (
        <img src={LogoImg} alt="" className={styles.Logo} />
    )
}

export default Logo