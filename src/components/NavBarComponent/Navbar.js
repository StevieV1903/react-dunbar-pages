import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import Home from "../../assets/homeimg/home-button.png"



const Navbar = () => {
  
  
    return (

        
        <nav className="navbar">

            <div className="navbar-home">
        
                <Link to="/react-dunbar-pages">
                <img src={Home} />
                </Link>

            </div>
        
            <ul className="navbar-nav">
           {/* <div className="navbar-home">
                 <li>
                 <Link to="/" className="home-nav">
                 <img src={Home} />
                 </Link>
            </li>
             </div> */}
             
                <li>
                <Link to="/react-dunbar-pages/attractions" className="navlink">
                    attractions
                </Link>
                </li>
                <li>
                <Link to="/react-dunbar-pages/restaurants" className="navlink">
                    restaurants
                </Link>
                </li>
            <   li>
                <Link to="/react-dunbar-pages/highstreet" className="navlink">
                    highstreet
                </Link>
                </li>
                <li>
                <Link to="/react-dunbar-pages/cafes" className="navlink">
                    cafes
                 </Link>
                </li>
            </ul>
         </nav>
    );
}

export default Navbar;