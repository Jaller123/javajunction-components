import React from "react";
import styles from "./CoffeeImg.module.css";

const CoffeeImg = ({ src }) => {
  return (
    <>
      <div>
        <img className={styles.coffeeImg} src={src} alt="Coffee" />
      </div>
    </>
  );
};

export default CoffeeImg;
