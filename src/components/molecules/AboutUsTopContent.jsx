import React from "react";
import AboutUsImg from "../atoms/AboutUsImg";
import AboutUsText from "../atoms/AboutUsText";
import styles from "./AboutUsTopContent.module.css";

const AboutUsTopContent = () => {
    return (
        <div className={styles.AboutUsTopContent}>
            <div className={styles.text}>
                <AboutUsText />
            </div>
            <div className={styles.image}>
                <AboutUsImg />
            </div>
        </div>
    );
}

export default AboutUsTopContent;

