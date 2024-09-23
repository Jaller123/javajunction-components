import NavLinkHeader from "../atoms/NavLinkHeader"
import Coffee from "../organisms/Coffee"
import Tea from "../organisms/Tea"
import AboutUs from "../organisms/AboutUs"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from "./NavLinks.Module.css"

const FirstMolecule = () => {
    return (
        <Router>
            <>
                <div className={styles.navbar}>
                    <NavLinkHeader title="Coffee" link={Coffee} className={styles.link} />
                    <NavLinkHeader title="Tea" link={Tea} className={styles.link} />
                    <NavLinkHeader title="About us" link={AboutUs} className={styles.link} />

                </div>
                <Routes>
                    <Route path="/coffee" Component={Coffee} />
                    <Route path="/Tea" Component={Tea} />
                    <Route path="/About us" Component={AboutUs} />
                </Routes>

            </>
        </Router>

    )
}
export default FirstMolecule