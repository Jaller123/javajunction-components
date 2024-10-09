import React from "react";
import CoffeeImg from "../atoms/CoffeeImg";
import AddToCartBtn from "../atoms/AddToCartBtn";
import styles from "./Coffee.module.css";
import coffee1 from "../../Pictures/coffeeBeans.jpg";
import coffee2 from "../../Pictures/CoffeeImg2.jpg";
import coffee3 from "../../Pictures/CoffeImg3.jpg";
import coffee4 from "../../Pictures/CoffeeImg4.jpg";
import coffee5 from "../../Pictures/CoffeeImg5.jpg";
import coffee6 from "../../Pictures/CoffeeImg6.jpg";
import coffee7 from "../../Pictures/CoffeeImg7.jpg";
import coffee8 from "../../Pictures/CoffeeImg8.jpg";
import CartIcon from "../atoms/CartIcon/CartIcon";
import { useState } from "react";


const Coffee = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1); // Increment the cart count
  };

  const items = Array.from({ length: 8 }, (_, index) => index + 1);
  const coffeeImages = [
    coffee1,
    coffee2,
    coffee3,
    coffee4,
    coffee5,
    coffee6,
    coffee7,
    coffee8,
  ];
  return (
    <div className={styles.pageContainer}>
      <h1>Coffee</h1>

      <CartIcon cartCount={cartCount} />
      <div className={styles.gridContainer}>
        <div className={styles.topSection}>
          {items.slice(0, 4).map((item, index) => (
            <div key={item} className={styles.item}>
              <CoffeeImg src={coffeeImages[index]} />
              <AddToCartBtn handleAddToCart={handleAddToCart} />

            </div>
          ))}
        </div>

        <div className={styles.bottomSection}>
          {items.slice(4, 8).map((item, index) => (
            <div key={item} className={styles.item}>
              <CoffeeImg src={coffeeImages[index + 4]} />
              <AddToCartBtn handleAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Coffee;
