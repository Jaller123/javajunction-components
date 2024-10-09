import React from "react";
import AboutUsImg2 from "../../atoms/AboutUsImg2";
import AboutUsText3 from "../../atoms/AboutUsText3";
import styles from "./AboutUsBottomContent.module.css";

const AboutUsBottomContent = () => {
    return (
        <div className={styles.AboutUsBottomContent}>
            <div className={styles.image}>
                <AboutUsImg2 /> 
            </div>
            <div className={styles.text}>
                <AboutUsText3 /> 
            </div>
        </div>
    );
}

export default AboutUsBottomContent;
