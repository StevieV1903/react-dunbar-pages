import React, {useEffect} from "react";
import "../Lister.css";

import wishingtree from "../../assets/cafesimg/wishingtree.png";
import graze from "../../assets/cafesimg/graze.jpg";
import sixteenfifty from "../../assets/cafesimg/1650coffee.jpg";



const AttractionsLister = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
});

    return (

    <>
        <h1 className="lister-main-header">Dunbar Cafes</h1>

        <body>
          <div className="lister-body-container">
            <p className="lister-body-text">
              Dunbar is home to some fabulous cafes where you can enjoy a freshly roasted brew and some amazing home baked cakes and scones. Watch the world go by in a quaint high street haunt or arrange to meet with groups of friends for a catch up and a chin wag over a huge selection of teas coffees and tray-bakes.
              <br /><br />
            </p>
          </div>
        </body>

      
      <div className="lister-banner">

      <div className="lister-container">

        <div className="lister-item">
          <img src={wishingtree} alt="wishing tree" />
          <h1 className="lister-title"> The Wishing Tree</h1>
          <p className="lister-detail">
          Wishing Tree by the Sea is located in Lauderdale Park, 100m from Dunbar High Street. It is enclosed by a beautiful walled garden and has outdoor play equipment and climbing frames. With outdoor seating as well as plenty of picnic benches, you can enjoy a coffee whilst the kids play.
        </p>
        <br />
        <a className="link-lister" href="https://www.wishingtreebythesea.com/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/Wishing+Tree+by+the+Sea/@56.0033893,-2.5245333,17z/data=!3m1!4b1!4m5!3m4!1s0x4887051c6c1306dd:0x66c4e2ee4406e717!8m2!3d56.0033893!4d-2.5223446"> view location </a>
        <br /><br />
        </div>
       
        <div className="lister-item">
          <img src={graze} alt="graze" />
          <h1 className="lister-title"> Graze</h1>
          <p className="lister-detail">
          Graze Coffee and Chocalate House is located on Dunbar's High Street. They offer breakfasts, soups, light lunches, homebaking and delicious coffee, specialty teas and hot chocolates and afternoon teas. You can dine alfresco, sit in or takeaway and are always guaranteed a friendly welcome.
        </p>
        <br />
        <a className="link-lister" href="http://grazedunbar.co.uk/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/Graze+Coffee+%26+Chocolate+House/@56.0016174,-2.5174818,17z/data=!3m1!4b1!4m5!3m4!1s0x488705607eb4f259:0x86f4bb68bdae743e!8m2!3d56.0016174!4d-2.5152931"> view location </a>
        <br /><br />
        </div>
       
        <div className="lister-item">
          <img src={sixteenfifty} alt="sixteen fifty" />
          <h1 className="lister-title"> 1650 Coffee Shop</h1>
          <p className="lister-detail">
          1650 Coffee Shop sells a selection of varioius Espresso based drinks, such as Latte, Mocha and Cappuccino. They also sell a selection of baguettes (made fresh daily in store), soup and handmade cakes. Enjoy comfortable seating and take in the only sea view on Dunbar's High Street.
        </p>
        <br />
        <a className="link-lister" href="https://www.visiteastlothian.org/eat/cafe/VEL-10266"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/dir/55.9893336,-2.5224771/1650+Coffee+Shop+76+High+Street/@55.9955263,-2.5243435,15z/data=!3m1!4b1!4m11!1m2!2m1!1s1560+coffee+shop+dunbar!4m7!1m0!1m5!1m1!1s0x488705607c527c5d:0xce7f968d7f71b20c!2m2!1d-2.5161111!2d56.0019444"> view location </a>
        <br /><br />
        </div>


        </div>
        </div>

       

    

      
    </>
        
        )
        }

export default AttractionsLister;