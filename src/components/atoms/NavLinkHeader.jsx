import { Link } from "react-router-dom"
const NavLinkHeader = ({ link, title }) => {
    return (
        <>
            <Link to={link}>{title}</Link>
        </>
    )
}
export default NavLinkHeader