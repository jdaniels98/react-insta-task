import React from "react"
import { useState } from "react"
import { updateUser } from "../utils"

const UpdateUser = ({user}) => {
    console.log(user)
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const updateUsername = async (event) => {
        event.preventDefault()
        console.log(username)
        await updateUser(user, "username", username)
    }
    const updateEmail = async (event) => {
        event.preventDefault()
        console.log(email)
        await updateUser(user, "email", email)
    }
    const updatePassword = async (event) => {
        event.preventDefault()
        console.log(password)
        await updateUser(user, "password", password)
    }

    // const changeHandler = async (event) => {
    //     event.preventDefault()
    //     await updateUser(username, key, value)
    // }

    return (
        <div>
        <form onSubmit={updateUsername}>
            <label className="updateFRM" id="updateFRM1" >Update Username:
                <input onChange={(event) => setUsername(event.target.value)} />
                <button type="submit">Update</button>
            </label>
        </form>
        <br></br>
        <form onSubmit={updateEmail}>
            <label className="updateFRM" >Update Email:
                <input onChange={(event) => setEmail(event.target.value)} />
                <button type="submit">Update</button>
            </label>
        </form>
        <br></br>
        <form onSubmit={updatePassword}>
            <label className="updateFRM" >Update Password:
                <input onChange={(event) => setPassword(event.target.value)} />
                <button type="submit">Update</button>
            </label>
        </form>
        <br></br>
        </div>
    )
}

export default UpdateUser