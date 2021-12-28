import styles from './Card.module.css'

interface CardProps{
    children?:string
}

const Card = (props:CardProps) =>{
    return (
        <div className={styles.card}>
            {props.children}
        </div>
    )
}

export default Card;