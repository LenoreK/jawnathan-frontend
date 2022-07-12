function Videos() {
    return (
        <div>
            {/* Video */}
            <div className="videos">
                <h2 className="video-heading">Videos</h2>
                <h4>Watch the latest Videos and <a href="https://www.youtube.com/channel/UCCJlod4ApI_lpHFZYVbyDJg">subscribe on YouTube</a></h4>
                <div className="music-video">
                {/* <video width="640" height="365" controls >
                    <source src={video} type="video/mp4"/>
                </video> */}
                <iframe width="640" height="360" src="https://www.youtube.com/embed/YLXzVlRBdAc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Videos