import React from 'react';
import OrdersContainer from "../../molecules/Orders/OrdersContainer";
import OrderSummary from "../../molecules/Orders/OrderSummary";
import ShoppingCart from "../../molecules/Orders/ShoppingCart";
import styles from './Orders.module.css';
import ProductBoxOrder from '../../molecules/Orders/ProductBoxOrder';

const Orders = () => {
  return (
    <div className={styles.ordersContainer}>
      <div className={styles.shoppingCart}>
        <ShoppingCart />
      </div>
      <div className={styles.orderSummary}>
        <OrderSummary />
        <div />
        <div className={styles.orderSummary}>
        <ProductBoxOrder  />
        <ProductBoxOrder />
        <ProductBoxOrder />
        </div>
      </div>
    </div>
  );
}

export default Orders;
