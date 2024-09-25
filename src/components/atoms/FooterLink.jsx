import React from 'react';
import styles from './FooterLink.module.css';

const FootLink = ({ title, links, config }) => {
    if (!links || links.length === 0) return <div>No links provided</div>;

    const { columns = 3, gap = '10px' } = config; // Standard: 3 kolumner och 10px gap

    return (
        <div>
            {title && <h3>{title}</h3>} {/* Visa titeln om den finns */}
            <div
                className={styles.gridContainer}
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${columns}, 1fr)`, // 3 kolumner
                    gap, // Anpassat gap
                }}
            >
                {links.map((LinkComponent, index) => (
                    <div key={index} className={styles.gridItem}>
                        <LinkComponent /> {/* Renderar varje länk */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FootLink;