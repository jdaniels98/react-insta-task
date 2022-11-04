import './App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import Login from "./components/Login"
// import Register from './components/Register'
import ReadUsers from './components/ReadUsers'
import UpdateUser from './components/UpdateUser'
import DeleteUser from './components/DeleteUser'
import { getCookie } from './common'
import { findUser } from './utils'

const App = () => {
  
  useEffect(() => {
    fetchImages()
    let cookie = getCookie("jwt_token")
    if (cookie !== false) {
      loginWithToken(cookie)
    }
  },[])
  
  const [user, setUser] = useState()
  const [photos, setPhotos] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
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
    setIsLoaded(true)
  }

  return (
    <div className="App">

      <Login setter={setUser} />
      {user ?
      <div>
        <h2>Hello! Welcome {user}!</h2>
        <ReadUsers />
        <UpdateUser user={user} />
        <DeleteUser user={user} />
      </div>
      :
      <h2>Please Register!</h2>}

      {isLoaded && photos.map((item, index) => {
        return (
          <div className='photos'>
            <div className='photosBorder'>
              <h2>Photo by {item.author}</h2>
              <img src={item.download_url} width="200px" alt="random from lorem picsum" />
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;