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
    const initialToken = localStorage.getItem('token')
    const initialUser = localStorage.getItem('user')
    const [token, setToken] = useState(initialToken ? initialToken : '')
    const [user, setUser] = useState(initialUser ? JSON.parse(initialUser):{id:'',username:'',email:''})
    const isLoggedIn = !!token;
    const loginHandler = (token:string, user: User) =>{
        setToken(token)
        setUser(user)
        localStorage.setItem('token',token)
        localStorage.setItem('user',JSON.stringify(user))
    }
    const logoutHandler = () =>{
        setToken('')
        setUser({id:'',username:'',email:''})
        localStorage.removeItem('token')
        localStorage.removeItem('user')
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