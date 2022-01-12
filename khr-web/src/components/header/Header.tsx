import Links from './Links';
import styles from './Header.module.css'
import { useState, useEffect } from 'react';
const Header = () => {
    const [show, setShow] = useState(true)
    const [prevOffSet, setPrevOffSet] = useState(window.scrollY)
    const handleScroll = () => {
        setPrevOffSet(PrevOffSet => {
            if (PrevOffSet > window.scrollY) {
                setShow(true)
            } else {
                setShow(false)
            }
            return window.scrollY
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <header className={`${styles['header']} ${!show && styles.hide}`}>
            <img src={require('../../assets/logo.png')} alt="header-logo" className={styles.logo}></img>
            <Links></Links>
        </header>
    );
};

export default Header;
