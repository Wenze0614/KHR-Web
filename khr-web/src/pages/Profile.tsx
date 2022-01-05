import React from 'react'
import Button from '../components/ui/Button'
import { useContext } from 'react'
import AuthContext from '../store/auth-context'
import Strip from '../components/strip/Strip'
import {useNavigate} from 'react-router-dom'
export default function Profile() {
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate()
    return (
        <div>
            <Strip>
                <Button type="button" onClick={()=>{authCtx.logout();navigate('/',{replace:true})}}>Log Out</Button>
            </Strip>
        </div>
    )
}
