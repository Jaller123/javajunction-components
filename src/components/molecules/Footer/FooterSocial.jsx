import React from 'react';
import styles from './FooterSocial.module.css'; // Använda CSS-modul

const FooterSocial = () => {
    return (
        <div className={styles.footerContainer}>
            <h3 className={styles.title}>Follow Us</h3>
            <ul className={styles.linkList}>
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
        </div>
    );
};

export default FooterSocial;