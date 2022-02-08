import Links from './Links';
import styles from './Header.module.css'
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { motion, AnimatePresence, useCycle } from 'framer-motion'

const listsVar = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .3,
            ease: "easeOut"
        }
    },
    close: {
        opacity: 0,
        y: -100,
        transition: {
            duration: .3,
            ease: "easeOut"
        }
    }
}
const iconVar = {
    enter: {
        rotate: -180,
        opacity: 1,
        transition: {
            duration: .3,
            ease: "easeOut"
        }
    },
    exit: {
        rotate: 180,
        opacity: 0,
        transition: {
            duration: .3,
            ease: "easeOut"
        }
    }
}
const Header = () => {
    const [show, setShow] = useState(true)
    const [prevOffSet, setPrevOffSet] = useState(window.scrollY)
    const [active, setActive] = useState(false)
    const handleScroll = () => {
        setPrevOffSet(PrevOffSet => {
            if (PrevOffSet > window.scrollY) {
                setShow(true)
            } else {
                setShow(false)
            }
            if (window.scrollY === 0) {
                setShow(true)
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
            <AnimatePresence exitBeforeEnter>
                {active ?
                    <motion.div key="open-button" className={styles.toggle} onClick={() => { setActive(active => !active); }}
                        variants={iconVar}
                        animate='enter'
                        exit='exit'>
                        <MenuOpenIcon style={{ color: "white" }} className={`${styles.menuIcon}`}></MenuOpenIcon>
                    </motion.div> :
                    <motion.div className={styles.toggle} onClick={() => { setActive(active => !active); }}
                        variants={iconVar}
                        animate='enter'
                        exit='exit'>
                        <MenuIcon style={{ color: "white" }} className={`${styles.menuIcon}`} ></MenuIcon>
                    </motion.div>
                }
            </AnimatePresence>
            <motion.div className={`${styles.menu} ${active ? styles.active : null}`}
                variants={listsVar}
                animate={active ? 'open' : 'close'}><Links></Links>
            </motion.div>
            <div className={styles.links}><Links></Links></div>
        </header>

    );
};

export default Header;
