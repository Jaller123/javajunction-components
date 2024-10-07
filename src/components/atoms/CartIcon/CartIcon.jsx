import React from 'react';
import styles from "./CartIcon.module.css";

const CartIcon = ({ cartCount, redirectToCheckout }) => {
  return (
    <div className={styles.cartContainer} onClick={redirectToCheckout}>
      <div className={styles.shoppingIcon}></div>
      <div className={styles.cartCount}>{cartCount}</div> {/* Cart count displayed beside the icon */}
    </div>
  );
};

export default CartIcon;
