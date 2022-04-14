// import { url } from 'inspector';
// import React from 'react';
// import SubscriptionForm from '../form/SubscriptionForm';
import styles from './Footer.module.css'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={require('../../assets/home/home-4.png')} alt=''></img>
            <div className={styles.logo}>
                <img className={styles['KHR-logo']} src={require('../../assets/logo.png')} alt='KHR-logo'></img>
                <img className={styles['ACNC-logo']} src={require('../../assets/ACNC-logo.png')} alt='ACNC-logo'></img>
            </div>
            {/* <SubscriptionForm /> */}
            <div className={styles.contact}>
                <h3>- CONTACT -</h3>
                <p>Mobile:<span> 0411 053 853</span></p>
                <p>Email:<span> admin@kalinahorserescue.org</span></p>
                <p>Address:<span> PO BOX 45 Stoneville WA 608</span></p>
                <h3>- DONATE -</h3>
                <p>Kalina Horse Rescue</p>
                <p>BSB:<span>006-115</span></p>
                <p>Account:<span>1102 5771</span></p>
            </div>
        </footer>
    );
};

export default Footer;