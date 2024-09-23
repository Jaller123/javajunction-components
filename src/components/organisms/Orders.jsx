import React from 'react'
import OrdersContainer from "../molecules/OrdersContainer"
import OrderSummary from "../molecules/OrderSummary"
import ShoppingCart from "../molecules/ShoppingCart"
import styles from './Orders.module.css';




const Orders = () => {
  return (
  <>
<div className={styles.ShoppingCart}>
  <div className={styles.OrderSummary}>
    <div className={styles.ordersContainer}>  
    <OrdersContainer />  
    <OrderSummary /> 
    <ShoppingCart />
    </div>
  </div>
</div>
  </>
  )
}

export default Orders