

function About() {
    return (
    <body className="about-body">
        <header>
            <h2 className="about-header">Biography</h2>
        </header>
        
        <div className="text">
            <div className="block-1">
                <div className="par-1">
                    <h3>Multi-Instrumentalist</h3>
                    <p>Jawnathn Sebastian Sellers is a multi-instrumentalist from Mount Laurel, New Jersey. Jawnathan has over 15 years of live performance, songwriting and recording experience and has worked with a number of groups and as a solo musician. His involvement in these many projects has led to a unique multifaceted skill set spanning numerous musical genres and several different instruments.</p>
                </div>
                <img className="voice-image" src={require("../Assets/DSCF29811.jpeg")} alt="Jawnathan playing music" />
            </div>
            <div className="block-2">
                <img className="piano-image" src={require("../Assets/IMG_3286.JPG")} alt="Jawnathan playing music" />
                    <div className="par-2">
                        <h3>Early Years</h3>
                        <p>Jawnathan started his musical career with the band Shadowplay. Shadowplay would write two original albums together and tour much of the eastern parts of the Untied States including New York City, Chicago, Saint Louis, Atlanta, Austin and Montreal, Canada. The group incorporated a wide array of genres and musical interests spanning grunge, post rock and indie and later funk and soul. They were noted for their versatility, covering anything from Rage Against the Machine to Stevie Wonder during their many extended performances throughout South Jersey.</p>
                    </div>
                </div>
                <div className="block-3">
                    <div className="par-3">
                        <h3>Branching Out</h3>
                        <p>Jawnathan later expanded with many other groups including Cheezy and the Crackers, a reggae band from Millville, New Jersey. He has since worked with Cheezy and the Crackers for the last six years and as a member has performed many of the resorts and casinos in Atlantic City and neighboring shore towns. His other creative involvements have included the band Det Cart Sid, an avant-garde jazz-fusion group, Adventure Lost, a progressive Beatles-esque power trio, and The Screaming Rockets, a 50’s style rock ‘n’ roll revival band. For these projects, Jawnathan has performed on piano, guitar, bass and both backing and lead vocals.</p>
                    </div>
                    <img className="guitar-image" src={require("../Assets/DSCF2848.jpeg")} alt="Jawnathan playing music" />
                </div>
                <div className="block-4">
                    <img className="voice-guitar-image" src={require("../Assets/DSCF3284.jpeg")} alt="Jawnathan playing music" />
                    <div className="par-4">
                        <h3>Current Work</h3>
                        <p>Jawnathan also performs as a solo singer songwriter at bars, breweries and restaurants in South Jersey. His performances make use of his extensive repertoire of both covers and original compositions. He uses looping pedals and effects to create unique versions of songs and dense musical atmospheres that leave a listener believing more people are on stage.</p>
                    </div>
                </div>
            </div>

        </body>
    )
}

export default About;