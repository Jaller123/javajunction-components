import React from "react"
import { Link } from "react-router-dom"
import styles from "./NavLink.module.css"
const Navlink = ({ link, title }) => {
    return (
        <>
            <Link className={styles.NavLink} to={link}>{title}</Link>
        </>
    )
}
export default Navlink