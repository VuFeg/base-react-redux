import videoHomepage from '../../assets/video-homepage.mp4'

const HomePage = () => {
    return (
        <div className="homepage-container" >
            <video autoPlay loop muted>
                <source
                    src={videoHomepage}
                    type="video/mp4"
                />
            </video>
            <div className="homepage-content">
                <div className="header">Forms that break the norm</div>
                <div className="title">Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.</div>
                <div className="btn-content">
                    <button>Get started—it's free</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;