import AboutUsImgImage from "../../Pictures/Kaffe-Bild2.jpg"
import styles from "../atoms/AboutUsImg.module.css"

const AboutUsImg = () => {
    
    return (
        <img src={AboutUsImgImage} alt="" className={styles.AboutUsImg}/>
    )
}

export default AboutUsImg;