import styles from './FooterNavigation.module.css'

const FooterNavigation = () => {
    return (
        <div className={styles.FooterNavigation}>
            <div>
                <p>Home</p>
                <p>Coffee</p>
                <p>Tea</p>
            </div>
            <div>
                <p>About us</p>
                <p>Our products</p>
                <p>Partners</p>
            </div>
            <div>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>LinkedIn</p>
            </div>
        </div>
    )
}

export default FooterNavigation;