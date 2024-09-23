import React from "react";
import CoffeeImage from "../../Pictures/CoffeeBeans.jpg";
import styles from "./CoffeeImg.module.css";

const CoffeeImg = () => {
  return (
    <>
      <div>
        <img
          className={styles.coffeeImg}
          src={CoffeeImage}
          alt="Coffee Beans"
        />
      </div>
    </>
  );
};

export default CoffeeImg;
