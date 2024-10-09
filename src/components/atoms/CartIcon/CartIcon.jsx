import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import styles from "./CartIcon.module.css";

const CartIcon = ({ cartCount }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleCartClick = () => {
    navigate("/orders"); // Navigate to the /orders route when clicked
  };
  return (
    <div className={styles.cartContainer} onClick={handleCartClick}>Shopping Cart
      <div className={styles.shoppingIcon}></div>
      <div className={styles.cartCount}>{cartCount}</div> {/* Cart count displayed beside the icon */}
    </div>
  );
};

export default CartIcon;
