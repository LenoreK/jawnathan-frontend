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
  
  let [enteredUsers, setEnteredUsers] = useState('')
  let [userData, setUserData] = useState("")

  // Find Exisiting Users
  useEffect(() => {
    if(enteredUsers) {
      const fetchData = async () => {
        const response = await fetch(`https://localhost:3003/${enteredUsers}`)
        const resData = await response.json()
        if (resData.id != null) {
          setUserData(resData)
        } else {
          setMessage('Not Found')
        }
      }
      fetchData()
    }
  }, [enteredUsers])

  const handleEnteredUser = (e, userName) => {
    e.preventDefault()
    setEnteredUsers(userName)
  }

  const handleNewUser = (e, newUserName) => {
		e.preventDefault()
    console.log(newUserName)
		if(newUserName) {      
      
      let defaultPassword = newUserName.charAt(1) + newUserName.length + newUserName.charAt(newUserName.length - 1) + '*'

			let fetchData = async () => {
        let fetchString = API_URL	+ setUserData
        let response = await fetch(fetchString,{
					crossDomain:true,
					method: 'POST',
					headers: {'Content-Type':'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'POST'},          
          body: JSON.stringify({'user_name':newUserName,'password':defaultPassword, 'last_modified':'05/05/2022','last_modified_by':'WebSite'})
        })
        console.log(response)
        setUserData(newUserName)		
			}
			fetchData()
		}
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
              <Route path="/Login" element={<Login handleEnteredUser={handleEnteredUser}/>}/>
              <Route path="/Register" element={<Register handleNewUser={handleNewUser}/>}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
