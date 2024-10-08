import React from "react"
import { Link } from "react-router-dom"
import styles from "./NavLink.module.css"
const Navlink = ({ link, title, className }) => {
    return (
        <>
            <Link className={`${styles.NavLink} ${className}`} to={link}>
                {title}
            </Link>
        </>
    )
}
export default Navlink