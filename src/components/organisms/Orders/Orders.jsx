import React from 'react'
import OrdersContainer from "../../molecules/Orders/OrdersContainer"
import OrderSummary from "../../molecules/Orders/OrderSummary"
import ShoppingCart from "../../molecules/Orders/ShoppingCart"
import styles from './Orders.module.css';
import ProductBoxOrder from '../../molecules/Orders/ProductBoxOrder';




const Orders = () => {
  return (
  <>

  <div className={styles.ShoppingCart}>
    <div className={styles.OrderSummary}>
   
      <div className={styles.ordersContainer}>  
      <OrdersContainer />  
      <div className={styles.productBox}>
      <OrderSummary /> 
      <ProductBoxOrder />
      </div>
      <ShoppingCart />
      
      </div>
      </div>
    </div>
  

  </>
  )
}

export default Orders