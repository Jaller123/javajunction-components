import React from "react";
import AboutUsImg from "../atoms/AboutUsImg";
import AboutUsImg2 from "../atoms/AboutUsImg2";
import AboutUsTitle from "../atoms/AboutUsTitle";
import AboutUsText from "../atoms/AboutUsText";
import AboutUsText2 from "../atoms/AboutUsText2";
import styles from "../molecules/AboutUsContent.module.css";

const AboutUsContent = () => {
    return (
        <div className={styles.AboutUsContent}>
            <AboutUsImg />
            <AboutUsImg2 />
            <AboutUsTitle />
            <AboutUsText />
            <AboutUsText2 />
        </div>
    );
}

export default AboutUsContent;