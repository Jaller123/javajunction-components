import React from 'react';
import styles from './Footer.module.css';
import FooterCompany from '../molecules/Footer/FooterCompany';
import FooterSocial from '../molecules/Footer/FooterSocial';
import FooterNavigate from '../molecules/Footer/FooterNavigate';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.gridContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <FooterNavigate />
                <FooterCompany />
                <FooterSocial />
            </div>
        </div>
    );
};

export default Footer;