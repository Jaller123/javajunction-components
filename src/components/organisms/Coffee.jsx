import React from "react";
import CoffeeImg from "../atoms/CoffeeImg";
import AddToCartBtn from "../atoms/AddToCartBtn";
import styles from "./Coffee.module.css";
const Coffee = () => {
  const items = Array.from({ length: 8 }, (_, index) => index + 1);

  return (
    <div className={styles.pageContainer}>
      <h1>Coffee</h1>

      <div className={styles.gridContainer}>
        <div className={styles.topSection}>
          {items.slice(0, 4).map((item) => (
            <div key={item} className={styles.item}>
              <CoffeeImg />
              <AddToCartBtn />
            </div>
          ))}
        </div>

        <div className={styles.bottomSection}>
          {items.slice(4, 8).map((item) => (
            <div key={item} className={styles.item}>
              <CoffeeImg />
              <AddToCartBtn />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coffee;
