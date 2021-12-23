import React from 'react';
import styles from './Strip.module.css'

type stripProp = {
    background:string,
    children:string
}
const Strip = (props:stripProp) => {
    return (
        <div className={styles.strip} style={{backgroundImage:`url(${require(`../../assets/${props.background}`)})`}}>
            {props.children}
        </div>
    );
};

export default Strip;