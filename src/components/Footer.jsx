import React from "react"
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className="container">
                <article>
                    <p>Navigate</p>
                    <li>Home</li>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>About Us</li>
                </article>
                <article>
                    <p>Company</p>
                    <li>About us</li>
                    <li>Our products</li>
                    <li>Partners</li>
                </article>
                <article>
                    <p>Social media</p>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                </article>
            </div>
            <footer>
                <p>JavaJunction &copy;</p>
                <a href="*">javajunction@example.com</a>
            </footer>
        </div>
    )
}

export default Footer;