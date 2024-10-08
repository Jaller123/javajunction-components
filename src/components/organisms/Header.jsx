import React from "react";
import Logo from "../atoms/Logo";
import styles from "./Header.module.css";
import NavLinks from "../molecules/NavLinks";
import CartIcon from "../atoms/CartIcon/CartIcon"
const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Logo />
        <NavLinks />
        {/* // <CartIcon /> */}
      </div>
    </>
  );
};
export default Header;
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
