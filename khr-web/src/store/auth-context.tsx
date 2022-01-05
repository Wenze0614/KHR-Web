import React,{ReactNode, useState} from 'react'

type User = {
    id:string,
    username:string,
    email:string
}
const AuthContext = React.createContext({
    token:'',
    isLoggedIn:false,
    user:{id:'',username:'',email:''},
    login:(token:string, user:User)=>{},
    logout:()=>{}
})

export const AuthContextProvider = (props:{children:ReactNode}) =>{
    const [token, setToken] = useState('')
    const [user, setUser] = useState({id:'',username:'',email:''})
    const isLoggedIn = !!token;

    const loginHandler = (token:string, user: User) =>{
        setToken(token)
        setUser(user)
    }
    const logoutHandler = () =>{
        setToken('')
        setUser({id:'',username:'',email:''})
    }

    const contextValue = {
        token:token,
        isLoggedIn:isLoggedIn,
        user:user,
        login:loginHandler,
        logout:logoutHandler
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext;