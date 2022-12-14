import React from "react";
import { useState } from "react"
import { loginUser } from '../utils';

const Login = ({setter}) => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault()
        await loginUser(username, email, password, setter)
    }

    return (
        <form onSubmit = {submitHandler}>
            <label>Username:
                <input onChange={(event) => setUsername(event.target.value)} />
            </label>
            <br></br>
            <label>Email:
                <input onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br></br>
            <label>Password:
                <input onChange={(event )=> setPassword(event.target.value)} type="password" />
            </label>
            <br></br>
            <button type="submit">Login</button>
        </form>
    )
}

export default Login