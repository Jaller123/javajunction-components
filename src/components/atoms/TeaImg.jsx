import React from "react";
import styles from "./TeaImg.module.css";

const TeaImg = ({ src }) => {
  return (
    <>
      <div>
        <img className={styles.teaImg} src={src} alt="Tea" />
      </div>
    </>
  );
};

export default TeaImg;
