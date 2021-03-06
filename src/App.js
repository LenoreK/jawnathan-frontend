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
import {useEffect, useState } from 'react';
                

function App() {
  const adminUser = {
    email: 'johnathanssellers@gmail.com',
    username: 'jawnathanadmin',
    password: 'admin123'
  }
  
  let [enteredUser, setEnteredUser] = useState('')
  let [userData, setUserData] = useState("")
  let [enteredPassword, setEnteredPassword] = useState('')
  let [newPassword, setNewPassword] = useState('')
  let [newEmail, setNewEmail] = useState('')
  let [newUser, setNewUser] = useState('')

  const handleEnteredPassword = (e, password) => {
    e.preventDefault(
      setEnteredPassword(password)
    )
  }

  const handleEnteredUser = (e, eUser) => {
    e.preventDefault()
    setEnteredUser(eUser)
  }

  const handleNewPassword = (e, nPassword) => {
    e.preventDefault(
      setEnteredPassword(nPassword)
    )
  }

  const handleNewUser = (e, newUser) => {
    e.preventDefault(
      setNewUser(newUser)
    )
  }

  const handleNewEmail = (e, email) => {
    e.preventDefault()
    setNewEmail(email)
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
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
