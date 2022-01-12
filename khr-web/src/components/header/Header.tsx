import Links from './Links';
import styles from './Header.module.css'
import { useState, useEffect } from 'react';
const Header = () => {
    const [show, setShow] = useState(true)
    const [prevOffSet, setPrevOffSet] = useState(window.scrollY)
    const handleScroll = () => {
        console.log(window.pageYOffset)
        setPrevOffSet(PrevOffSet => {
            if (PrevOffSet > window.scrollY) {
                console.log('scroll up')
                setShow(true)
            } else {
                console.log('scroll down')
                setShow(false)
            }
            return window.scrollY
        })
        // if (window.scrollY > currOffSet) {
        //     setShow(false)
        // } else {
        //     console.log('scroll up')
        //     setShow(true)

        // }


    }
    //  useEffect(() => {
    //     console.log(currOffSet)
    //     if (window.scrollY > currOffSet) {
    //         setShow(false)
    //     } else {
    //         console.log('scroll up')
    //         setShow(true)

    //     }
    //     setCurrOffSet(window.scrollY)
    // }, [currOffSet])
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
