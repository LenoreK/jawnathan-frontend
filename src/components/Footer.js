import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

function Footer() {
    return (
        <footer>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" href="/Contact">Contact</li>
                <div class="nav-item" className="social">
                    <a className="facebook" href="https://www.facebook.com/john.sellers.129"><FaFacebook/></a>
                    <a className="instagram" href="https://instagram.com/jawn_sellers?igshid=YmMyMTA2M2Y="><FaInstagram/></a>
                    <a className="youtube" href="https://www.youtube.com/channel/UCCJlod4ApI_lpHFZYVbyDJg"><FaYoutube/></a>
                </div>
                <li class="nav-item" href="">&copy; Copyright 2022 Jawnathan Sellers</li>
                <li class="nav-item" href="">Privacy Policy</li>
            </ul>
        </footer>
    )
}

export default Footer;