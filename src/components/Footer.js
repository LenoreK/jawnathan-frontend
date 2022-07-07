import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { Nav } from 'react-bootstrap';

function Footer() {
    return (
            <small><Nav className="navbar-nav mr-auto" id="footer">
                <Nav.Link className="nav-item" id="nav-item" href="/Copyright">&copy; Copyright 2022 Jawnathan Sellers</Nav.Link>
                <div id="nav-item">
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                    <div className="nav-item" id="social">
                        <a className="facebook" href="https://www.facebook.com/john.sellers.129"><FaFacebook/></a>
                        <a className="instagram" href="https://instagram.com/jawn_sellers?igshid=YmMyMTA2M2Y="><FaInstagram/></a>
                        <a className="youtube" href="https://www.youtube.com/channel/UCCJlod4ApI_lpHFZYVbyDJg"><FaYoutube/></a>
                    </div>
                </div>
                <div id="nav-item">
                    <Nav.Link id="music" className="nav-item" href="/Music">Music</Nav.Link>
                    <Nav.Link className="nav-item" id="privacy" href="/Privacy">Privacy Policy</Nav.Link>
                </div>
            </Nav></small>
    )
}

export default Footer;