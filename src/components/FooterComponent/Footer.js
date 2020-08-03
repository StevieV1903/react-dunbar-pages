import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
import twitter from "../../assets/socialimg/twitter.png";
import instagram from "../../assets/socialimg/instagram.png";
import email from "../../assets/socialimg/email.png";
import linkedin from "../../assets/socialimg/linkedin.png";



const Footer = () => {
  
  
    return (
        <nav className="footer">

                <p className="footer-text">  &copy; StevieV1903 </p>
        
        <ul className="footer-nav">

                <a href="https://www.linkedin.com/in/stevevance/">
                    <li>
                        <img src={linkedin} alt="linkedin" /> 
                    </li>
                </a>
                   
                <a href="https://twitter.com/stevievance">
                    <li>
                        <img src={twitter} alt="twitter" />
                    </li>
                </a>

                <a href="https://www.instagram.com/steviev1903/">
                    <li>
                        <img src={instagram} alt="instagram" /> 
                    </li>
                </a>

                <a href="mailto:steve.vance@hotmail.com?subject=Enquiry to Discovering Dunbar">
                <li>
                    <img src={email} alt="email" />
                </li>
                </a>
                
        </ul>
        </nav>
    );
}

export default Footer;

{/* <footer>
    <p>&copy; 2020 Harrison Booth </p>

    <nav id="files">
      <ul class="horizontal-list">
        <li><a href="#cookies">cookie policy</a></li>
        <li><a href="#privacy">privacy policy</a></li>
        <li><a href="#terms">terms of use</a></li>
      </ul>
    </nav>
  </footer> */}