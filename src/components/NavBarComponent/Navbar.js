import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'



const Navbar = () => {
  
  
    return (
        <nav className="navbar">
        
        <ul className="navbar-nav">
            <li>
                <Link to="/react-dunbar-pages" className="navlink">
                    home
                </Link>
            </li>
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
            <li>
                <Link to="/react-dunbar-pages/highstreet" className="navlink">
                    high street
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

//   <header>
//     <section id="title">
//       <img src="https://placebear.com/100/100" alt="bear">
//       <h1>Bears? Bears.</h1>
//     </section>

//     <nav id="page-navigation">
//       <ul class="horizontal-list">
//         <li><a href="#home">home</a></li>
//         <li><a href="#blog">blog</a></li>
//         <li><a href="#contact">contact</a></li>
//       </ul>
//     </nav>
//   </header>