import { NavLink } from "react-router-dom"
import styles from './Links.module.css'
const Links = () => {
    return (
        <ul className={styles.links}>
            <li><NavLink to="/" className={(NavStatus)=>NavStatus.isActive? styles['active']:''}>Home</NavLink></li>
            <li><NavLink to="/donation" className={(NavStatus)=>NavStatus.isActive? styles['active']:''}>Donation</NavLink></li>
            <li><NavLink to="/sponsorship" className={(NavStatus)=>NavStatus.isActive? styles['active']:''}>Sponsorshipt</NavLink></li>
            <li><NavLink to="/adoption" className={(NavStatus)=>NavStatus.isActive? styles['active']:''}>Adoption</NavLink></li>
            <li><NavLink to="/signIn" className={(NavStatus)=>NavStatus.isActive? styles['active']:''}>SignIn/SignUp</NavLink></li>
        </ul>
    )
}

export default Links;