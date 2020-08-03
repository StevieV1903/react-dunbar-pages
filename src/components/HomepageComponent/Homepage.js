import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import harbour from "../../assets/attractionsimg/harbour.jpg";
import highstreet from "../../assets/homeimg/highstreet.jpg";
import foodndrink from "../../assets/homeimg/foodndrink.jpg";
import cafe from "../../assets/homeimg/cafe.jpg";


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
});
  
    return (
    <>
      <header>
        <div className="title">
        <h1>Discovering Dunbar</h1>
        <h2>Scroll down for more!</h2>
        </div>
      </header>

      <body>
        <div className="home-information">
          <p className="homepage-body-text">
          Dunbar is located on the North Sea coast of East Lothian, about 30 miles to the east of Edinburgh along the A1. The area around Dunbar is renowned for its high sunshine record, rugged coastline and beautiful countryside. The town's coastline is home to some of Scotland's best beaches and supports a wide range of habitats, birds and plants and covers some of the most spectacular East Lothian coastline.
          <br /><br />
          Dunbar is a wonderful town to visit and has something for everyone, both young and old. Famed worldwide as the birthplace of John Muir, the town carefully balances its history with a diverse number of outdoor and adventure activities. 
          <br /><br />
          Dunbar’s broad high street is packed full of unique local businesses providing customers with a great retail experience and boasts several grand old stone buildings. There are award winning food and drink establishments and quirky places to stay including hotels, guest houses and campsites.
          <br />
          </p>
        </div>
      </body>
        
        <nav>
          <div className="menu-banner-style">
            
          <div>
            <Link to="/attractions">
            <div className="menu-home">
            <img src={harbour} alt="dunbar harbour" />
            <h1 className="menu-title-home"> LOCAL ATTRACTIONS</h1>
            </div>
            </Link>
          </div>

          <div>
            <Link to="/foodanddrink">
            <div className="menu-home">
            <img src={foodndrink} alt="food and drink" />
            <h1 className="menu-title-home"> RESTAURANTS</h1>
            </div>
            </Link>
          </div>

          <div>
            <Link to="/highstreet">
            <div className="menu-home">
            <img src={highstreet} alt="high street" />
            <h1 className="menu-title-home"> THE HIGH STREET</h1>
            </div>
            </Link>
          </div>

          <div>
            <Link to="/cafes">
            <div className="menu-home">
            <img src={cafe} alt="cafe" />
            <h1 className="menu-title-home"> CAFES</h1>
            </div>
            </Link>
          </div>
        
          </div>
        </nav>
        
    </>
  );
}

export default Home;