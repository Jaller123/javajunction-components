import React from "react"
import Navlink from "../atoms/Navlink"
import Coffee from "../organisms/Coffee"
import Tea from "../organisms/Tea"
import AboutUs from "../organisms/AboutUs"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from "./NavLinks.Module.css"

const NavLinks = () => {
    return (
        <Router>
            <>
                <div className={styles.navbar}>
                    <Navlink title="Coffee" link={Coffee} className={styles.link} />
                    <Navlink title="Tea" link={Tea} className={styles.link} />
                    <Navlink title="About us" link={AboutUs} className={styles.link} />

                </div>
                {/* <Routes>
                    <Route path="/coffee" Component={Coffee} />
                    <Route path="/Tea" Component={Tea} />
                    <Route path="/About us" Component={AboutUs} />
                </Routes> */}

            </>
        </Router>

    )
}
export default NavLinks