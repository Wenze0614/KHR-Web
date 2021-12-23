import React from 'react';
import Strip from '../components/strip/Strip';
import styles from '../components/strip/Strip.module.css'

const Home = () => {
    console.log('home')
    return (
        <div className={styles["strip-container"]}>
            <Strip background="home/home-1.jpg">Strip 1</Strip>
            <Strip background="home/home-2.jpg">Strip 2</Strip>
            <Strip background="home/home-3.png">Strip 3</Strip>
        </div>
    );
};

export default Home;