import './App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import Register from './components/Register'
import ReadUsers from './components/ReadUsers'
import UpdateUser from './components/UpdateUser'
import DeleteUser from './components/DeleteUser'

const App = () => {
  useEffect(() => {
    fetchImages()
  },[])
  
  const [user, setUser] = useState()
  const [photos, setPhotos] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const fetchImages = async () => {
    const response = await fetch ("https://picsum.photos/v2/list")
    const data = await response.json()
    setPhotos(data)
    setIsLoaded(true)
  }

  return (
    <div className="App">

      <Register setter={setUser} />
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