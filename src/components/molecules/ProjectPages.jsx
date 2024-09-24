import React from "react";
import CoffeeImg from "../atoms/CoffeeImg"; 
import AddToCartBtn from "../atoms/AddToCartBtn"; 
import styles from "./ProjectPages.module.css";
const ProjectPages = () => {
  return (
    <div className={styles.itemContainer}>
      <CoffeeImg />
      <AddToCartBtn /> 
    </div>
  );
};

export default ProjectPages;



