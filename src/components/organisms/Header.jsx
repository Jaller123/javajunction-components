import Logo from "../atoms/Logo"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <Logo />

            </div>
        </>


    )
}
export default Header
// const Header = ({ title, children }) => {
//     // if (!title) {
//     //     console.warn("Title is missing in Login button")
//     // }
//     return (
//         <>
//             <button className={styles.Header}>{title}</button>
//         </>
//     )
// }
// export default Header
// // 