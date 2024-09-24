import React from "react";
import styles from "./AddToCartBtn.module.css";

const AddToCartBtn = ({ handleAddToCart }) => {
  return (
    <div>
      <button className={styles.addToCartBtn} onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default AddToCartBtn;
