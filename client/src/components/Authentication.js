import React, { useState, useContext } from "react"
import { UserContext } from "../context/UserContext"
import {
	Auth,
	AuthForm,
	AuthLogin,
	AuthLogin as AuthSignup,
    HelpText,
} from "./StyledComponents"

const Authentication = props => {
    const [showLogin, setShowLogin] = useState(true)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
	const { credentials, setCredentials, initUserCredentials, signup, login } =
    useContext(UserContext)
    
    const toggleShowLogin = () => setShowLogin(!showLogin)
    const toggleShowPassword = () => setShowPassword(!showPassword)

	const handleChange = e => {
		const { name, value } = e.target
		setCredentials(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	const handleConfirmPassword = e => {
		setConfirmPassword(e.target.value)
	}

	const handleLogin = e => {
		e.preventDefault()
		login(credentials)
	}

	const handleSignup = e => {
		e.preventDefault()
		signup(credentials)
	}

    const handleClear = () => {
        setCredentials(initUserCredentials)
        setConfirmPassword("")
    }

	return (
		<Auth id={props.id}>
			{showLogin ? (
				<AuthLogin>
					<AuthForm onSubmit={handleLogin}>
						<label>Username</label>
						<input
							type="text"
							name="username"
							value={credentials.username}
							onChange={handleChange}
						/>
						<label>Password <span onClick={toggleShowPassword}>Show</span></label>
						<input
							type={showPassword ? "text" : "password"}
							name="password"
							value={credentials.password}
							onChange={handleChange}
						/>
                        <section>
				<button id="loginButton" type="submit">Login</button>
				<button id="cancelLoginButton" type="button" onClick={handleClear}>Cancel</button>
				</section>
					</AuthForm>
					<HelpText>
						Don't have an account?{" "}
						<span type="button" onClick={toggleShowLogin}>
							Signup
						</span>
					</HelpText>
				</AuthLogin>
			) : (
				<AuthSignup>
					<AuthForm onSubmit={handleSignup}>
						<label>Username</label>
						<input
							type="text"
							name="username"
							value={credentials.username}
							onChange={handleChange}
						/>
						<label>Password <span onClick={toggleShowPassword}>Show</span></label>
						<input
							type={showPassword ? "text" : "password"}
							name="password"
							value={credentials.password}
							onChange={handleChange}
						/>
						<label>Confirm Password <span onClick={toggleShowPassword}>Show</span></label>
						<input
							type={showPassword ? "text" : "password"}
							name="confirmPassword"
							value={confirmPassword}
							onChange={handleConfirmPassword}
						/>
                        <section>
				<button id="signupButton" type="submit">Signup</button>
				<button id="cancelSignupButton" type="button" onClick={handleClear}>Cancel</button>
				</section>
					</AuthForm>
					<HelpText>
						Already have an account?{" "}
						<span type="button" onClick={toggleShowLogin}>
							Login
						</span>
					</HelpText>
				</AuthSignup>
			)}
		</Auth>
	)
}

export default Authentication
