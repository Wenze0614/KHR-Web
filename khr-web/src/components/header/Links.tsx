import { NavLink } from "react-router-dom"
import styles from './Links.module.css'
const Links = () => {
    return (
        <ul className={styles.links}>
            <li><NavLink to="/" className={(NavStatus)=>NavStatus.isActive? styles['active']:''}>Home</NavLink></li>
            <li><NavLink to="/Donation" className={(NavStatus)=>NavStatus.isActive? styles['active']:''}>Donation</NavLink></li>
            <li><NavLink to="/Sponsorship" className={(NavStatus)=>NavStatus.isActive? styles['active']:''}>Sponsorshipt</NavLink></li>
            <li><NavLink to="/Adoption" className={(NavStatus)=>NavStatus.isActive? styles['active']:''}>Adoption</NavLink></li>
        </ul>
    )
}

export default Links;