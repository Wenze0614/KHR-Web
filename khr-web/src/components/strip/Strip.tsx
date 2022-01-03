import React, { ReactNode } from 'react';
import styles from './Strip.module.css'

type stripProp = {
    background?: string,
    backgroundColor?:string,
    darkness?:string,
    children: ReactNode
}
const Strip = (props: stripProp) => {
    return (
        <div className={styles.strip} style={props.background ? { backgroundImage: `url(${require(`../../assets/${props.background}`)})` } : {backgroundColor: `${props.backgroundColor}`}}>
            <div className={styles['darken-model']} style={props.darkness ? {opacity:`${props.darkness}`}:{opacity:0}}> </div>
            <div className={styles['strip-content']}>{props.children}</div>

        </div>
    );
};

export default Strip;