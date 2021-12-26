import styles from './Button.module.css'
interface Button{
    type:"button" | "submit" | "reset" | undefined
    children?:string
}
const Button = (props:Button) => {
    return (
        <button className={styles.myButton} type={props.type}>{props.children}</button>
    );
};

export default Button;