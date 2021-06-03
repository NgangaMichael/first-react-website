import Carditem from "./Carditem"
import './Cards.css';
import adventure from '../assets/adventure1.jpg';
import luxury from '../assets/luxury1.jpg';
import mystry from '../assets/mystry1.jpg';
import adventure2 from '../assets/adventure2.jpg';
import adrenaline from '../assets/adrenaline1.jpg';


const Cards = () => {
    return (
        <div className="cards">
            <h1>Check Out these Epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem 
                            src={adventure}
                            text="Explore the hidden waterfall deep inside the amazone"
                            lable="Adventure"
                            path="/services"
                        />
                        <Carditem 
                            src={luxury}
                            text="Travel through the island of Bali in Private Cruise"
                            lable="Luxury"
                            path="/products"
                        />
                        {/* <Carditem 
                            src={luxury}
                            text="Travel through the island of Bali in Private Cruise"
                            lable="Luxury"
                            path="/products"
                        /> */}
                        
                    </ul>

                    <ul className="cards__items">
                        <Carditem 
                            src={mystry}
                            text="Set sail in the Atlantic Ocean Visiting Uncharted waters"
                            lable="Mystrey"
                            path="/services"
                        />
                        <Carditem 
                            src={adventure2}
                            text="Experience fooball on top of the Himilayan Mountains"
                            lable="Adventure"
                            path="/services"
                        />
                        <Carditem 
                            src={adrenaline}
                            text="Ride through the Sahara Desert on a guided camel tour"
                            lable="Adrenaline"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Cards;