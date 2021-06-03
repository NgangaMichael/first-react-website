import { Link } from "react-router-dom";
import {Button} from "./Button";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure Newsletter to rescieve our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can Unsubscribe at any Time
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle="btn--outline" >SUBSCRIBE</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Services</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Products</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
            </div>
            
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            MILES <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">
                        MILES@2020
                    </small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="instagram">
                            <i className="fab fa-instagram-f"></i>
                        </Link>
                        <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="twitter">
                            <i className="fab fa-twitter-f"></i>
                        </Link>
                        <Link className="social-icon-link linkedIn" to="/" target="_blank" aria-label="linkedIn">
                            <i className="fab fa-linkedIn-f"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Footer;