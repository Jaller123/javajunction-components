import React from 'react'
import styles from "./CartIcon.module.css"

const CartIcon = ({ cartCount, redirectToCheckout }) => {
  return (
    <div className={styles.shoppingIcon} onClick={redirectToCheckout}>
      . {cartCount} {/* Display the cart count here */}
    </div>
  );
};

export default CartIcon