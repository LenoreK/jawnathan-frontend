import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { Nav } from 'react-bootstrap';
import Button  from 'react-bootstrap/Button';

function Footer() {
    return (
            <small><Nav className="navbar-nav mr-auto" id="footer">
                <div className="nav-item">
                <Nav.Link id="nav-item" href="/Copyright">&copy; Copyright 2022 Jawnathan Sellers</Nav.Link>
                <Nav.Link id="privacy" href="/Privacy">Privacy Policy</Nav.Link>
                <Nav.Link id="login" href="/Login">Login</Nav.Link>
                </div>
                <div id="nav-item">
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                    <div id="social">
                        <big><a className="facebook" href="https://www.facebook.com/john.sellers.129"><FaFacebook/></a>
                        <a className="instagram" href="https://instagram.com/jawn_sellers?igshid=YmMyMTA2M2Y="><FaInstagram/></a>
                        <a className="youtube" href="https://www.youtube.com/channel/UCCJlod4ApI_lpHFZYVbyDJg"><FaYoutube/></a></big>
                    </div>
                </div>
                <div id="nav-item">
                    <div className="subscribe">
                    <big><Nav.Link>Subscribe to our Newsletter</Nav.Link></big>
                    <Button href="/Register" className="register">Register</Button>
                    </div>
                </div>
            </Nav></small>
    )
}

export default Footer;