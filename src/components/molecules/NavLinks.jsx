import React from "react"
import Navlink from "../atoms/Navlink"
import Coffee from "../organisms/Coffee"
import Tea from "../organisms/Tea"
import AboutUs from "../organisms/AboutUs"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from "./NavLinks.Module.css"

const NavLinks = ({ NavLinksclassName, customNavLinkClass }) => {
    return (

        <>
            <div className={`${styles.navbar} ${NavLinksclassName}`}>
                {/* <div className={styles.subNavbar} > */}
                <Navlink title="Coffee" link={Coffee} className={`${styles.link} ${customNavLinkClass}`} />
                <Navlink title="Tea" link={Tea} className={`${styles.link} ${customNavLinkClass}`} />
                <Navlink title="About us" link={AboutUs} className={`${styles.link} ${customNavLinkClass}`} />
                {/* </div> */}
            </div>

        </>


    )
}
export default NavLinks

//   <Router>
//             <Routes>
//                 <Route path="/coffee" Component={Coffee} />
//                 <Route path="/Tea" Component={Tea} />
//                 <Route path="/About us" Component={AboutUs} />
//             </Routes>
// </Router >