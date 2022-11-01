import React from "react"
import { useState, useEffect } from "react"

const ReadUsers = () => {
    const [usernames, setUsernames] = useState()

    return (
        <div className="container">
            {usernames?.length > 0
                ?(
                    <div className="usernames">
                        {usernames.map((user) => {
                            <h3>{user}</h3>
                        })}
                    </div>
                ) : (
                    <div className="empty">
                        <h3>No users found!</h3>
                    </div>
                )}
        </div>
    )
}

export default ReadUsers