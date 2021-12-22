import Links from './Links';
import styles from './Header.module.css'
const Header = () => {
    return (
        <header className={styles['header']}>
            <img src={require('../../assets/logo.png')} alt="header-logo" className={styles.logo}></img>
            <Links></Links>
        </header>
    );
};

export default Header;