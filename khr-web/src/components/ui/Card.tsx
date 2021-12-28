import { ReactNode } from 'react';
import styles from './Card.module.css'

interface CardProps{
    className:string,
    children?:ReactNode
}

const Card = (props:CardProps) =>{
    return (
        <div className={`${styles.card} ${styles[props.className]}`}>
            {props.children}
        </div>
    )
}

export default Card;