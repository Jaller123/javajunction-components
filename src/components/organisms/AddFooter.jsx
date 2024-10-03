import React from 'react';
import FooterAdress from '../atoms/FooterAdress';
import FooterPhone from '../atoms/FooterPhone';
import FooterCopy from '../atoms/FooterCopy';
import styles from './AddFooter.module.css'; // Skapa en CSS-fil för layouten

const AddFooter = () => {
    return (
        <div className={styles.footerContainer}>
            <FooterAdress />
            <FooterPhone />
            <FooterCopy />
        </div>
    );
}

export default AddFooter;