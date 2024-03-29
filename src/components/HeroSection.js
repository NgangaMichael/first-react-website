import { Button } from "./Button"
import "./HeroSection.css"
import "../App.css"


const HeroSection = () => {
    return (
        <div className="hero-container">
            
            {/* <video src="/videos/luku.webm" autoPlay loop muted /> */}
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for</p>
            <div className="hero-btns">
                <Button 
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
                > 
                Get Started
                </Button>
                <Button 
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
                > 
                WATCH TRAILER <i className="far fa-play-circle" />

                </Button>
            </div>
        </div>
    );
}
 
export default HeroSection;