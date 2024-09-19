const Header = ({ title, children }) => {
    if (!title) {
        console.warn("Title is missing in Login button")
    }
    return (
        <>
            <button>{title}</button>
        </>
    )
}
export default Header