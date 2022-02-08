
import Modal from '@mui/material/Modal';
import { ReactNode } from 'react'
import styles from './MyBackDrop.module.css'
// const style = {
//     position: 'absolute' as 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };
export default function MyBackDrop(props: { children: ReactNode, open: boolean, onClose: () => void, className:string }) {

    return (
        <Modal
            open={props.open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onBackdropClick={() => { props.onClose() }}
            className={styles.myModal}
        >
            <div className={styles[props.className]}>
                {props.children}
            </div>
        </Modal>
    )
}
