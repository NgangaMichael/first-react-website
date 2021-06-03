import HeroSection from "../HeroSection";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";

const Home = () => {
    return (
        <div className="homepage">
            <HeroSection />
            <Cards />
            <Footer />
        </div>
    );
}
 
export default Home;