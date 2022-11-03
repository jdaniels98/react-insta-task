import React from "react"
import { useState } from "react"
import { updateUser } from "../utils"

const UpdateUsers = () => {
    const [username, setUsername] = useState()
    const [key, setKey] = useState()
    const [value, setValue] = useState()

    const changeHandler = async (event) => {
        event.preventDefault()
        await updateUser(username, key, value)
    }

    return (
        <form onSubmit={changeHandler}>
            <label>Username:
                <input onChange={(event) => setUsername(event.target.value)}/>
            </label>
            <br></br>
            <label>Key:
                <input onChange={(event) => setKey(event.target.value)}/>
            </label>
            <br></br>
            <label>Value:
                <input onChange={(event) => setValue(event.target.value)}/>
            </label>
            <br></br>
            <button type="submit">Update!</button>
        </form>
    )
}

export default UpdateUsers