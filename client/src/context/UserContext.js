import React, { useState, createContext, useEffect } from "react"
import axios from "axios"
import userAxios from './userAxios'

const UserContext = createContext()

const UserContextProvider = props => {
    const initUserState = {
        ...localStorage.getItem( "user" ) || "",
        token: localStorage.getItem( "token" ) || "",
        errMsg: "",
    }

    const initUserCredentials = { username: "", password: "" }
    const [userState, setUserState] = useState( initUserState )
    const [credentials, setCredentials] = useState( initUserCredentials )

    // Sign up new user
    const signup = () => {
        axios
            .post( "/auth/signup", credentials )
            .then( res => {
                const { user, token } = res.data
                localStorage.setItem( "user", JSON.stringify( user ) )
                localStorage.setItem( "token", token )
                setUserState( {
                    ...user,
                    token,
                } )
            } )
            .catch( err => console.log( err ) )
    }

    // Login existing user

    const login = () => {
        axios
            .post( "/auth/login", { username: "marcus", password: "password" } )
            .then( res => {
                const { user, token } = res.data
                localStorage.setItem( "user", JSON.stringify( user ) )
                localStorage.setItem( "token", token )
                setUserState( {
                    ...user,
                    token,
                } )
            } )

            .catch( err => console.log( err ) )
    }

    const logout = e => {
        e.preventDefault()
        localStorage.setItem( "user", "" )
        localStorage.setItem( "token", "" )
        setUserState( initUserState )
    }

    const handleAuthErr = errMsg => {
        setUserState( prevState => ( {
            ...prevState,
            errMsg,
        } ) )
    }

    const resetAuthErr = () => {
        setUserState( prevState => ( {
            ...prevState,
            errMsg: "",
        } ) )
    }

    // useEffect( () => {
    //     setCredentials( initUserCredentials )
    // }, [userState] )

    return (
        <UserContext.Provider
            value={{
                credentials,
                setCredentials,
                signup,
                login,
                logout,
                userAxios,
                handleAuthErr,
                resetAuthErr,
                setUserState,
                ...userState,
            }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }
