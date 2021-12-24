import React from 'react';
import SubscriptionForm from '../form/SubscriptionForm';
import styles from './Footer.module.css'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <SubscriptionForm/>
        </footer>
    );
};

export default Footer;