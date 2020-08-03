import React, {useEffect} from "react";
import "../Lister.css";
import therocks from "../../assets/foodanddrinkimg/therocks.jpg"
import creel from "../../assets/foodanddrinkimg/creel.jpg"
import umbertos from "../../assets/foodanddrinkimg/umbertos.jpg"
import shapla from "../../assets/foodanddrinkimg/shapla.png"
import kingspalace from "../../assets/foodanddrinkimg/kingspalace.jpg"
import dunmuir from "../../assets/foodanddrinkimg/dunmuir.jpg"

const FoodanddrinkLister = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
});

    return (

    <>
      <h1 className="lister-main-header">Dunbar Restaurants</h1>

      <body>
          <div className="lister-body-container">
            <p className="lister-body-text">
              Dunbar is home to some top notch chefs and award-winning restaurants offering a wide variety of cuisines and regularly changing menus made from freshly prepared produce. From freshly caught seafood to the latest Asian and Indian dishes, you are spoilt for choice.
              <br /><br />
            </p>
          </div>
        </body>

      
      <div className="lister-banner">
      <div className="lister-container">

  
        <div className="lister-item">
          <img src={therocks} alt="the rocks" />
          <h1 className="lister-title"> The Rocks</h1>
          <p className="lister-detail">
          Award-winning restaurant offering regularly changing menus including seasonal, locally-sourced dishes, cooked to highest standards. The food is complemented by an excellent selection of wines, beers and spirits. There is also a beer garden, where you can enjoy a drink al fresco in Britain’s sunniest town. 
        </p>
        <br />
        <a className="link-lister" href="https://www.therockshoteldunbar.co.uk/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/The+Rocks/@56.005419,-2.5281727,17z/data=!3m1!4b1!4m8!3m7!1s0x48870564780cc895:0xb98cfbce1c71ea4b!5m2!4m1!1i2!8m2!3d56.005419!4d-2.525984?hl=en-GB"> view location </a>
        <br /><br />
        </div>
      

        <div className="lister-item">
          <img src={creel} alt="the creel" />
          <h1 className="lister-title">The Creel</h1>
          <p className="lister-detail">
          The Creel is a cosy wood panelled Scottish restaurant nestled between the two historic harbours of Dunbar. The food is inspired by East Lothians picturesque coastline where a clean modern-rustic style has been created. The restaurant has won its fair share of regional and national Awards for its cookery.
          </p>
          <br />
        <a className="link-lister" href="http://creelrestaurant.co.uk/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/The+Creel/@56.0045149,-2.5165564,17z/data=!3m1!4b1!4m5!3m4!1s0x4887055e1396da09:0x38cf37b713c26cb4!8m2!3d56.0045149!4d-2.5143677?hl=en-GB"> view location </a>
        <br /><br />
        </div>

        
        <div className="lister-item">
          <img src={umbertos} alt="umbertos" />
          <h1 className="lister-title">Umbertos</h1>
          <p className="lister-detail">
          Umberto's is an Italian restaurant specialising in serving a wonderful range of authentic Italian dishes, inspired by time-honoured recipes and created using only the freshest ingredients. The purely Italian cuisine centres on a variety of pizza and pasta dishes and they We also offer take-away options.
        </p>
        <br />
        <a className="link-lister" href="https://www.facebook.com/umbertosdunbar"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/Umberto's/@56.0029408,-2.5185159,17z/data=!3m1!4b1!4m5!3m4!1s0x488705609ab02b6b:0x5fecad55b2d674f8!8m2!3d56.0029408!4d-2.5163272?hl=en-GB"> view location </a>
        <br /><br />
        </div>
        

        
        <div className="lister-item">
          <img src={shapla} alt="shapla" />
          <h1 className="lister-title">Shapla Tandoori</h1>
          <p className="lister-detail">
          Shapla Tandoori is an Indian restaurant serving a wonderful range of authentic Indian dishes. It is located on Dunbar's High Street and offers an extensive menu with something for everyone. Serving up mid-priced Indian cuisine in a relaxed environment, they also offer take-away options.
        </p>
        <br />
        <a className="link-lister" href="https://www.facebook.com/Shapla-Tandoori-202364866576387"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/Shapla+Tandoori/@56.0032209,-2.5192303,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x51b02a09df214c9f!8m2!3d56.0032179!4d-2.5170419?hl=en-GB"> view location </a>
        <br /><br />
        </div>
       

              
      
        <div className="lister-item">
          <img src={kingspalace} alt="kings palace" />
          <h1 className="lister-title">Kings Palace</h1>
          <p className="lister-detail">
          Kings Palace is a Chinese restaurant serving a wonderful range of authentic Asian dishes. It is located on Dunbar's High Street and offers an extensive menu with something for everyone. Serving up mid-priced Cantonese cuisine in a relaxed environment, they also offer take-away options.
        </p>
        <br />
        <a className="link-lister" href="https://www.facebook.com/kpdunbar"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/Kings+Palace/@56.0030573,-2.5185795,17z/data=!3m1!4b1!4m5!3m4!1s0x4887056078fcb1c1:0x97ccf8e57997560a!8m2!3d56.0030573!4d-2.5163908?hl=en-GB"> view location </a>
        <br /><br />

        </div>
    

        
        <div className="lister-item">
          <img src={dunmuir} alt="dunmuir hotel" />
          <h1 className="lister-title">Dunmuir Hotel</h1>
          <p className="lister-detail">
          The 1902 Grill at the Dunmuir Hotel is one of East Lothian's leading award winning restaurants. It has established a fine reputation for the high quality of its cuisine and friendly service. The emphasis is always on fresh local/Scottish produce and with as much as possible made on the premises.
        </p>
        <br />
        <a className="link-lister" href="https://www.dunmuirhotel.co.uk/food"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/Dunmuir+Hotel,+Dunbar/@55.998054,-2.5102874,17z/data=!3m1!4b1!4m8!3m7!1s0x48870ff676ab2d2f:0xd7d5189d401daf2d!5m2!4m1!1i2!8m2!3d55.998054!4d-2.5080987?hl=en-GB"> view location </a>
        <br /><br />
        </div>
        
        </div>
        </div>

      
    </>
        
        )
        }

export default FoodanddrinkLister;