import { NavLink } from "react-router-dom"
const Links = () => {
    return (
        <ul className="navigation">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Menu</NavLink></li>
            <li><NavLink to="/">What's New</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
        </ul>
    )
}

export default Links;