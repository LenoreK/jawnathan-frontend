import './App.css';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Music from "./components/Music"
import Performances from "./components/Performances"
import Shop from "./components/Shop"
import Videos from "./components/Videos"
import Login from "./components/Login"
import Register from "./components/Register"
import AddGig from "./components/AddGig"
import {useEffect, useState } from 'react';
                

function App() {
  const adminUser = {
    email: 'johnathanssellers@gmail.com',
    username: 'jawnathanadmin',
    password: 'admin123'
  }
  
  let [password, setEnteredPassword] = useState('')
  let [newPassword, setNewPassword] = useState('')
  let [user, setEnteredUser] = useState('')
  let [newUser, setNewUser] = useState('')
  let [email, setEmail] = useState('')
  let [newEmail, setNewEmail] = useState('')
  // let [time, setTime] = useState('')
  let [newTime, setNewTime] = useState('')
  let [newDate, setNewDate] = useState('')
  let [newState, setNewState] = useState('')
  let [newCity, setNewCity] = useState('')
  let [newPlace, setNewPlace] = useState('')
  let [newGig, setNewGig] = useState('')

  const handleEnteredPassword = (e, password) => {
    e.preventDefault(
      setEnteredPassword(password)
    )
  }

  const handleNewPassword = (e, newPassword) => {
    e.preventDefault(
      setNewPassword(newPassword)
    )
  }

  const handleEnteredUser = (e, user) => {
    e.preventDefault()
    setEnteredUser(user)
  }

  const handleNewUser = (e, newUser) => {
    e.preventDefault(
      setNewUser(newUser)
    )
  }

  const handleEmail = (e, email) => {
    e.preventDefault(
      setEmail(email)
    )
  }

  const handleNewEmail = (e, newEmail) => {
    e.preventDefault()
    setNewEmail(newEmail)
  }

  // const handleTime = (e, time) => {
  //   e.preventDefault()
  //   setTime(time)
  // }

  const handleNewTime = (e, newTime) => {
    e.preventDefault()
    setNewTime(newTime)
  }

    // const handleDate = (e, date) => {
  //   e.preventDefault()
  //   setDate(date)
  // }

  const handleNewDate = (e, newDate) => {
    e.preventDefault()
    setNewDate(newDate)
  }

      // const handlePlace = (e, place) => {
  //   e.preventDefault()
  //   setPlace(place)
  // }

  const handleNewPlace = (e, newPlace) => {
    e.preventDefault()
    setNewPlace(newPlace)
  }

      // const handleState = (e, state) => {
  //   e.preventDefault()
  //   setState(state)
  // }

  const handleNewState = (e, newState) => {
    e.preventDefault()
    setNewState(newState)
  }

  // const handleCity = (e, city) => {
  //   e.preventDefault()
  //   setCity(city)
  // }

  const handleNewCity = (e, newCity) => {
    e.preventDefault()
    setNewCity(newCity)
  }

  const handleNewGig = (e, newGig) => {
    e.preventDefault()
    setNewGig(newGig)
  }

  return (
      <Router>
        <div className="App">
          <Navigation />
          <div className='content'>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/About" element={<About />}/>
              <Route path="/Contact" element={<Contact />}/>
              <Route path="/Music" element={<Music />}/>
              <Route path="/Performances" element={<Performances />}/>
              <Route path="/Shop" element={<Shop/>}/>
              <Route path="/Videos" element={<Videos />}/>
              <Route path="/Login" element={<Login handleEnteredUser={handleEnteredUser} handleEnteredPassword={handleEnteredPassword}/>}/>
              <Route path="/Register" element={<Register handleNewUser={handleNewUser} handleNewPassword={handleNewPassword} handleNewEmail={handleNewEmail}/>}/>
              <Route path='/AddGig' element={<AddGig handleNewTime={handleNewTime} handleNewDate={handleNewDate} handleNewPlace={handleNewPlace} handleNewState={handleNewState} handleNewCity={handleNewCity} handleNewGig={handleNewGig}/>} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
