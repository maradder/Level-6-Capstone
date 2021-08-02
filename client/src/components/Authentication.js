import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const Authentication = props => {
    const {
        credentials,
        setCredentials,
        signup,
        login,
        logout,
        handleAuthErr,
        resetAuthErr,
        userAxios,
        setUserState,
        username,
        token,
        bookmarks,
        errMsg,
    } = useContext( UserContext )

    const [showLogin, setShowLogin] = useState( true )
    const [confirmPassword, setConfirmPassword] = useState( "" )
    const toggleShowLogin = () => setShowLogin( !showLogin )

    const handleChange = e => {
        const { name, value } = e.target
        setCredentials( prevState => ( {
            ...prevState,
            [name]: value
        } ) )
    }

    const handleConfirmPassword = e => {
        setConfirmPassword( e.target.value )
    }

    const handleLogin = e => {
        e.preventDefault()
        login( credentials )
    }

    const handleSignup = e => {
        e.preventDefault()
        signup( credentials )
    }

    return (
        <div style={{ position: "fixed", inset: "25% 45%", display: "flex", flexDirection: "column", height: "400px", width: "300px", border: "1px solid #121212", backgroundColor: "#ffffffab" }}>
            {
                showLogin ? (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <label>Username</label>
                            <input type="text" name="username" value={credentials.username} onChange={handleChange} />
                            <label>Password</label>
                            <input type="text" name="password" value={credentials.password} onChange={handleChange} />
                            <button type="submit">Submit</button>
                        </form>
                        <p>Don't have an account? <span type="button" onClick={toggleShowLogin}>Signup</span></p>

                    </div>
                )
                    :
                    (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <label>Username</label>
                                <input type="text" name="username" value={credentials.username} onChange={handleChange} />
                                <label>Password</label>
                                <input type="text" name="password" value={credentials.password} onChange={handleChange} />
                                <label>Confirm Password</label>
                                <input type="text" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} />
                                <button type="submit">Submit</button>
                            </form>
                            <p>Already have an account? <span type="button" onClick={toggleShowLogin}>Login</span></p>
                        </div>
                    )
            }
        </div>
    )

}

export default Authentication