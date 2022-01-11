import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
export type FlashType = 'error' | 'warning' | 'info' | 'success'
type FlashMessageProps = {
    message?: string,
    position?: {
        vertical: 'top' | 'bottom',
        horizontal: 'left' | 'center' | 'right'
    },
    type?: FlashType,
    time?:number,
    open:boolean

}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function FlashMessage(props: FlashMessageProps) {
    const [open, setOpen] = useState(props.open)

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            setOpen(false);
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={props.time} onClose={handleClose} anchorOrigin={props.position}>
            <Alert onClose={handleClose} severity={props.type} sx={{ width: '100%' }}>
                {props.message}
            </Alert>
        </Snackbar>
    )
}
