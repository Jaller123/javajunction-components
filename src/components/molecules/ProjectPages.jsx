import React from "react";
import CoffeeImg from "../atoms/CoffeeImg"; // Justera sökväg om det behövs
import AddToCartBtn from "../atoms/AddToCartBtn"; // Importera knappen
import styles from "./ProjectPages.module.css"; // Skapa en CSS-modul om du behöver stilar

const ProjectPages = () => {
  return (
    <div className={styles.itemContainer}>
      <CoffeeImg />
      <AddToCartBtn /> {/* Använd AddToCartBtn här */}
    </div>
  );
};

export default ProjectPages;



