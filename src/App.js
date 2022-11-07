import './App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import Login from "./components/Login"
import ReadUsers from './components/ReadUsers'
import UpdateUser from './components/UpdateUser'
import DeleteUser from './components/DeleteUser'
import { getCookie } from './common'
import { findUser } from './utils'

const App = () => {
  const [user, setUser] = useState()
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetchImages()
    let cookie = getCookie("jwt_token")
    if (cookie !== false) {
      loginWithToken(cookie)
    }
  },[])
  
  const loginWithToken = async (cookie) =>{
    const user = await findUser(cookie)
    setUser(user)
  }

  const fetchImages = async () => {
    const response = await fetch (`${process.env.REACT_APP_API}`)
    const data = await response.json()
    setPhotos(data)
  }

  return (
    <div className="App">

      <div className="sideNav">
        <p>Instagram</p>
        <a href="App.js">Home</a>
        <a href="App.js">Search</a>
        <a href="App.js">Explore</a>
        <a href="App.js">Messages</a>
        <a href="App.js">Notifications</a>
        <a href="App.js">Create</a>
        <a href="App.js">Profile</a>
      </div>
      

      <Login setter={setUser} />
      {user ?
      <div>
        <h2>Hello! Welcome {user}!</h2>
        <UpdateUser user={user} />
        {photos.map((item, index) => {
        return (
          <div className='photos'>
            <div className='photosBorder'>
              <h2>Photo by {item.author}</h2>
              <img src={item.download_url} width="200px" alt="random from lorem picsum" />
            </div>
          </div>
        )
      })}
        <ReadUsers />

        <DeleteUser user={user} />
      </div>
      :
      <h2>Please Register!</h2>}
    </div>
  );
}

export default App;

