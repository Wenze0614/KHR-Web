import { url } from 'inspector';
import React from 'react';
import SubscriptionForm from '../form/SubscriptionForm';
import styles from './Footer.module.css'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={require('../../assets/home/home-3.png')} alt=''></img>
            <SubscriptionForm/>
        </footer>
    );
};

export default Footer;