
import React from "react";
import styles from './Te.module.css'; 
const Te = () => (
  <div className={styles.container}>
    <h1>Tea</h1>
    <div className={styles.grid}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <div className={styles.item} key={item}>
          <img src={`https://via.placeholder.com/150?text=Image+${item}`} alt={`Image ${item}`} />
          <button className={styles.button}>Add to cart</button>
        </div>
      ))}
    </div>
  </div>
);

export default Te; 
