import Header from "./Header"

const HeroSection = () => {
    return (
        <div className="hero-section">
            <Header/>
            <div className="main-container">
                <div className="hero-content">
                    <div className="hero-data">
                        <span className="hero-data-number">#006</span>
                        <div className="hero-data-types">
                            <span>Fire</span>
                            <span>Flying</span>
                        </div>
                        <h1 className="hero-data-name">Charizard</h1>
                        <p className="hero-data-description">

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection