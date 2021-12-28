import React, { ReactNode } from 'react';
import styles from './Strip.module.css'

type stripProp = {
    background:string,
    children:ReactNode
}
const Strip = (props:stripProp) => {
    return (
        <div className={styles.strip} style={{backgroundImage:`url(${require(`../../assets/${props.background}`)})`}}>
            {props.children}
        </div>
    );
};

export default Strip;