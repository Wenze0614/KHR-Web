import React, { ReactNode } from 'react';
import styles from './Strip.module.css'

type stripProp = {
    background: string,
    children: ReactNode
}
const Strip = (props: stripProp) => {
    return (
        <div className={styles.strip} style={{ backgroundImage: `url(${require(`../../assets/${props.background}`)})` }}>
            <div className={styles['darken-model']}> </div>
            <div className={styles['strip-content']}>{props.children}</div>

        </div>
    );
};

export default Strip;