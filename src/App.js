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
import AdminLogin from "./Admin/AdminLogin"
                

function App() {
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
              <Route path="/AdminLogin" element={<AdminLogin />}/>
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
