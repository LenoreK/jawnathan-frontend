import Navigation from "./Navigation";
import Button  from 'react-bootstrap/Button';
import Footer from './Footer';

function Home() {
    return (
        <body>
            {/* Banner */}
            <div className="banner">
                    <div class="featured-content">
                        <h1 className="display-2">Jawnathan</h1>
                        <Button id="listen" variant="primary">Listen Now</Button>
                        <Button id="performances" variant="primary">Upcoming Performances</Button>
                    </div>
            </div>
        </body>
    )
}

export default Home;

{/* Booking
<div className="booking">
    <h2 className="music">Music for any Event</h2>
    <h4 className="live">Live music available in piano, guitar, voice, and bass.</h4>
    <div className="description">
        <p>Acaiberries gojiberries acid LSD ayahuasca acroyoga activatedcharcoal acunpuncture highercosmicforce spiritanimal kalesalad, mystic nonprofit malabeads dancedome quantumhealing harmony kundalini visualization kali, awareness Phish pittaimbalance lavender ganja holographicresonance feelingabandoned floattank perineum. Kali kalesalad mastercleanse sacredruins sacred emotionalrelease soundhealing sacredchanting, nagchampa kundalini synchronicity vitamix macrobiotic bluewhale, meditation herbaltea ontheplaya lovingkindness soulmate fasting.</p>
        <Button id="schedule" variant="primary">Schedule Now</Button>
    </div>
</div>
</div> */}