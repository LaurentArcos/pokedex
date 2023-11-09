import Header from "./Header"
import charizardImg from "../assets/images/Charizard_SSBU.png"

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
                            Charizard resembles a large traditional European dragon.
                            Despite the resemblance, Charizard is explicitly a Fire and Flying
                            types, and not a Dragon type, except in its "Mega Charizard X" form.
                            "Mega Charizard X" form; however, it can learn Dragon-type attacks.
                            type attacks.
                        </p>
                        <button className="hero-data-button">
                            More details
                        </button>
                    </div>
                    <div className="hero-image">
                        <img src={charizardImg} alt="Charizard Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection