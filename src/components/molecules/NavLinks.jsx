import React from "react";
import styles from "./NavLinks.Module.css";

const NavLinks = ({ className, customNavLinkClass, scrollToSection, coffeeRef, teaRef, aboutUsRef }) => {
    return (
        <div className={`${styles.navbar} ${className}`}>
            {/* Scroll to Coffee section */}
            <div
                className={`${styles.link} ${customNavLinkClass}`}
                onClick={() => scrollToSection(coffeeRef)}
            >
                Coffee
            </div>

            {/* Scroll to Tea section */}
            <div
                className={`${styles.link} ${customNavLinkClass}`}
                onClick={() => scrollToSection(teaRef)}
            >
                Tea
            </div>

            {/* Scroll to About Us section */}
            <div
                className={`${styles.link} ${customNavLinkClass}`}
                onClick={() => scrollToSection(aboutUsRef)}
            >
                About Us
            </div>
        </div>
    );
};

export default NavLinks;
//   <Router>
//             <Routes>
//                 <Route path="/coffee" Component={Coffee} />
//                 <Route path="/Tea" Component={Tea} />
//                 <Route path="/About us" Component={AboutUs} />
//             </Routes>
// </Router >