// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBarComponent/Navbar.js";
import Homepage from "./components/HomepageComponent/Homepage.js";
import Footer from "./components/FooterComponent/Footer.js"
import AttractionsLister from "./components/AttractionsComponent/AttractionsLister.js"
import FoodanddrinkLister from "./components/FoodanddrinkComponent/FoodanddrinkLister.js"
import HighStreetLister from "./components/HighStreetComponent/HighStreetLister.js"
import CafesLister from "./components/CafesComponent/CafesLister.js"


const App = () => {
  
  return (
    <BrowserRouter>
    <div className="App">

      <Navbar />

      <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/attractions" component={AttractionsLister} />
      <Route path="/restaurants" component={FoodanddrinkLister} />
      <Route path="/highstreet" component={HighStreetLister} />
      <Route path="/cafes" component={CafesLister} />
      </Switch>

      <Footer />
      
    </div>
    </BrowserRouter>
  );
}

export default App;

