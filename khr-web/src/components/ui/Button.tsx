import styles from './Button.module.css'
interface Button{
    type:"button" | "submit" | "reset" | undefined
    children?:string
    disable?:boolean
}
const Button = (props:Button) => {
    return (
        <button className={styles.myButton} type={props.type} disabled={props.disable ? props.disable : false}>{props.children}</button>
    );
};

export default Button;