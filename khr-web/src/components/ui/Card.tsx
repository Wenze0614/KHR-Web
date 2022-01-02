import { ReactNode } from 'react';
import styles from './Card.module.css'

interface CardProps {
    className: string,
    backgroundImg?: string,
    children?: ReactNode
}

const Card = (props: CardProps) => {
    console.log(props.backgroundImg)
    return (
        <div className={styles.card} style={props.backgroundImg ? { backgroundImage: `url(${props.backgroundImg})` } : {}}>
            {props.backgroundImg ? null : <p>No Pictures Available</p>}
            <div className={styles[props.className]}>
                {props.children}
            </div>
        </div>
    )
}

export default Card;