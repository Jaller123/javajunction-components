import React from "react";
import AboutUsTopContent from "../molecules/AboutUs/AboutUsTopContent";
import AboutUsMiddleContent from "../molecules/AboutUs/AboutUsMiddleContent";
import AboutUsBottomContent from "../molecules/AboutUs/AboutUsBottomContent";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
    return (
        <div className={styles.AboutUs}>
            <div className={styles.molecule}>
                <AboutUsTopContent />
            </div>
            <div className={styles.molecule}>
                <AboutUsMiddleContent />
            </div>
            <div className={styles.molecule}>
                <AboutUsBottomContent />
            </div>
        </div>
    );
}

export default AboutUs;
