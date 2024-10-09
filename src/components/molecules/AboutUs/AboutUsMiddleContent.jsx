import React from "react";
import AboutUsText2 from "../../atoms/AboutUsText2";
import AboutUsTitle from "../../atoms/AboutUsTitle";
import styles from "./AboutUsMiddleContent.module.css";

const AboutUsMiddleContent = () => {
    return (
        <div className={styles.AboutUsMiddleContent}>
            <div className={styles.title}>
                <AboutUsTitle />
            </div>
            <div className={styles.text}>
                <AboutUsText2 />
            </div>
            <div className={styles.empty}>
            </div>
        </div>
    );
}

export default AboutUsMiddleContent;
