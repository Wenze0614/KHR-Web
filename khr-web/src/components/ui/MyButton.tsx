import { ReactNode } from 'react';
import styles from './MyButton.module.css'
interface Button{
    type:"button" | "submit" | "reset" | undefined
    children?:string | ReactNode
    disable?:boolean
    onClick?:()=>void
}
const MyButton = (props:Button) => {
    return (
        <button className={styles.myButton} type={props.type} disabled={props.disable ? props.disable : false} onClick={props.onClick}><div className={styles.content}>{props.children}</div></button>
    );
};

export default MyButton;