import React from 'react'
import styles from "./Orders.module.css"

const Orders = () => {
  return (
    <>
    <div className={styles.ordersContainer}>
    <div className={styles.shoppingCart} />
    <div className={styles.orderSummary} />
    </div>
    </>
  )
}

export default Orders