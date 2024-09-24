import React from 'react';
import FootLink from './FooterLink';
import styles from './card.module.css';

// Exempel på länk-komponenter för Navigate
const Link1 = () => <p><a href="/">Home</a></p>;
const Link2 = () => <p><a href="/coffee">Coffee</a></p>;
const Link3 = () => <p><a href="/tea">Tea</a></p>;

// Exempel på länk-komponenter för Company
const CompanyLink1 = () => <p><a href="/about">About Us</a></p>;
const CompanyLink2 = () => <p><a href="/products">Products</a></p>;
const CompanyLink3 = () => <p><a href="/partners">Partners</a></p>;

// Exempel på länk-komponenter för Social Media
const SocialLink1 = () => <p><a href="https://facebook.com">Facebook</a></p>;
const SocialLink2 = () => <p><a href="https://instagram.com">Instagram</a></p>;
const SocialLink3 = () => <p><a href="https://linkedin.com">LinkedIn</a></p>;

const Card = () => {
    const navigateLinks = [Link1, Link2, Link3]; // Array med Navigate-länkar
    const companyLinks = [CompanyLink1, CompanyLink2, CompanyLink3]; // Array med Company-länkar
    const socialLinks = [SocialLink1, SocialLink2, SocialLink3]; // Array med Social Media-länkar

    const config = {
        columns: 1, // 1 kolumn för varje sektion
        gap: '20px', // 20px gap mellan kolumnerna
    };

    return (
        <div className={styles.cardContainer}>
            <div className={styles.linkSections}>
                <div>
                    <h1>Navigate</h1>
                    <FootLink links={navigateLinks} config={config} />
                </div>
                <div>
                    <h1>Company</h1>
                    <FootLink links={companyLinks} config={config} />
                </div>
                <div>
                    <h1>Social Media</h1>
                    <FootLink links={socialLinks} config={config} />
                </div>
            </div>
        </div>
    );
};

export default Card;