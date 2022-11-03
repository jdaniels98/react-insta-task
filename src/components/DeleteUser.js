import React from "react"
import { useState } from "react"
import { deleteUser } from "../utils"

const DeleteUser = () => {
    const [username, setUsername] = useState()

    const deleteHandler = async (event) => {
        event.preventDefault()
        await deleteUser(username)
    }
    
    return (
        <form onSubmit={deleteHandler}>
            <label>Enter Username:
                <input onChange={(event) => setUsername(event.target.value)} />
            </label>
            <br></br>
            <button type="submit">Delete This User!</button>
        </form>
    )
}

export default DeleteUser