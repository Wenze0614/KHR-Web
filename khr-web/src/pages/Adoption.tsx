import React from 'react'
import Strip from '../components/strip/Strip';
import styles from '../components/strip/Strip.module.css'
export default function Adoption() {
    return (
        <div className={styles["strip-container"]}>
            <Strip background="home/home-1.jpg">Adoption</Strip>
            <Strip background="home/home-2.jpg">Adoption</Strip>
            <Strip background="home/home-3.png">Adoption</Strip>
        </div>
    )
}
