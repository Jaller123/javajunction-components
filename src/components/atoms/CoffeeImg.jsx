import React from "react";
import styles from "./CoffeeImg.module.css";

const CoffeeImg = () => {
  return (
    <>
      <div>
        <img
          className={styles.coffeeImg}
          src="https://via.placeholder.com/150?text=Coffee+Placeholder" // Placeholder bild
          alt="img"
        />
      </div>
    </>
  );
};

export default CoffeeImg;
