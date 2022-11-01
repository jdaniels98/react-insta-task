import './App.css';
import Register from './components/Register';
import { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    fetchImages()
  },[])

  // const [user, setUser] = useState()
  // const [age, setAge] = useState()
  const [photos, setPhotos] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  // const [username, setUsername] = useState()
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()

  // const submitHandler = async (event) => {
  //   event.preventDefault()
  //   console.log(username,email,password)
  // }

  // const array = [{}]

  const fetchImages = async () => {
    const response = await fetch ("https://picsum.photos/v2/list")
    const data = await response.json()
    setPhotos(data)
    setIsLoaded(true)
  }

  return (
    <div className="App">
      {/* {array.map((item, index) => {
        return (
          <div>
            <Box name={item.name} age={item.age} />
          </div>
        )
      })} */}

      <Register />


{/* <form onSubmit ={submitHandler}>
        <label>Username:
          <input onChange = {(event) => setUsername(event.target.value)} />
        </label>
        <br></br>
        <label>Email:
          <input type="email" onChange = {(event) => setEmail(event.target.value)} />
        </label>
        <br></br>
        <label>Password:
          <input onChange = {(event) => setPassword(event.target.value)} />
        </label>
        <br></br>
        <button type="submit">Click here to sign-up or login!</button>
      </form> */}
      {/* <input onChange={(event) => setUser(event.target.value)} />
      <input onChange={(event) => setAge(event.target.value)} />
      {user ?
      <div><h1>Test Header</h1>
      <Box name={user} age={age} />
      </div>
      : <div>
        <h1>this is the else part of the statement</h1>
        </div>} */}


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