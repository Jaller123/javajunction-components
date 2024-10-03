import React from "react";
import TeaImg from "../atoms/TeaImg";
import AddToCartBtn from "../atoms/AddToCartBtn";
import styles from "./Tea.module.css";
import tea1 from "../../Pictures/Tea1.jpg";
import tea2 from "../../Pictures/Tea2.jpg";
import tea3 from "../../Pictures/Tea3.jpg";
import tea4 from "../../Pictures/Tea4.jpg";
import tea5 from "../../Pictures/Tea5.jpg";
import tea6 from "../../Pictures/Tea6.jpg";
import tea7 from "../../Pictures/Tea7.jpg";
import tea8 from "../../Pictures/Tea8.jpg";
const Tea = () => {
  const items = Array.from({ length: 8 }, (_, index) => index + 1);
  const TeaImages = [tea1, tea2, tea3, tea4, tea5, tea6, tea7, tea8];

  return (
    <div className={styles.pageContainer}>
      <h1>Tea</h1>

      <div className={styles.gridContainer}>
        <div className={styles.topSection}>
          {items.slice(0, 4).map((item, index) => (
            <div key={item} className={styles.item}>
              <TeaImg src={TeaImages[index]} />
              <AddToCartBtn />
            </div>
          ))}
        </div>

        <div className={styles.bottomSection}>
          {items.slice(4, 8).map((item, index) => (
            <div key={item} className={styles.item}>
              <TeaImg src={TeaImages[index + 4]} />
              <AddToCartBtn />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tea;
