import React from "react";
import styles from "./AddToCartBtn.module.css";

const AddToCartBtn = () => {
  return (
    <>
      <div>
        <button className={styles.addToCartBtn}>Add to cart</button>
      </div>
    </>
  );
};

export default AddToCartBtn;
