import React, {useEffect} from "react";
import "../Lister.css";
import foxlake from "../../assets/attractionsimg/foxlake.jpg"
import eastlinks from "../../assets/attractionsimg/eastlinks.jpg"
import dunbear from "../../assets/attractionsimg/dunbear.jpg"
import jmcountrypark from "../../assets/attractionsimg/jmcountrypark.jpg"
import alpacas from "../../assets/attractionsimg/alpacas.jpg"
import harbour from "../../assets/attractionsimg/harbour.jpg"
import strawberrybarn from "../../assets/attractionsimg/strawberrybarn.png"
import dunbargolf from "../../assets/attractionsimg/dunbargolf.jpg"
import coasttocoast from "../../assets/attractionsimg/coasttocoast.jpg"


const AttractionsLister = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
});

    return (

    <>
      <h1 className="lister-main-header">Dunbar Attractions</h1>

      <body>
        <div className="lister-body-container">
          <p className="lister-body-text">
          Dunbar and the surrounding area is host to a wide variety of fantastic attractions with something for all the family. From strolls along the coastline, relaxing on the fabulous beaches and a leisurely game of golf to wake boarding, zip trails, surfing and awesome cycle routes.
          <br /><br />
          </p>
        </div>
      </body>

      <div className="lister-banner">
      <div className="lister-container">

        <div className="lister-item">
          <img src={harbour} alt="dunbar harbour" />
          <h1 className="lister-title"> Dunbar Harbour & Battery</h1>
          <p className="lister-detail">
          A town of three harbours, Dunbar was once a major herring and whaling port. Its old harbour dates from the 17th century. It is a working harbour with a commercial fleet landing mainly shellfish. The harbour is also home to one of the largest lifeboat stations in the area.
        </p>
        <br />
        <a className="link-lister" href="http://www.dunbarharbourtrust.co.uk/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/Dunbar+Harbour+Trust/@56.00442,-2.5155038,17z/data=!3m1!4b1!4m5!3m4!1s0x4887055e7194762b:0x8e3cd2927d11b4cc!8m2!3d56.00442!4d-2.5133151?hl=en-GB"> view location </a>
        <br /><br />
        </div>
        
        <div className="lister-item">
          <img src={dunbear} alt="dunbear" />
          <h1 className="lister-title">The Dun'bear</h1>
          <p className="lister-detail">
          The Dun'bear is a steel sculpture of a bear in tribute to conservationist John Muir, who was born in Dunbar in 1838. The artwork, standing at 16ft high, was sculpted by Andy Scott, the man behind the Kelpies. It is located off the A1, near the Spott Roundabout in Dunbar.
          </p>
          <br />
        <a className="link-lister" href="http://www.andyscottsculptor.com/sculptures/the-dun-bear"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/The+DunBear/@55.9955257,-2.5243435,15z/data=!4m8!1m2!2m1!1sdunbar+bear!3m4!1s0x48870f6be6d95ee7:0xb49e0aa3e1edbb55!8m2!3d55.9882502!4d-2.5070272"> view location </a>
        <br /><br />
        </div>
        

        <div className="lister-item">
          <img src={alpacas} alt="alpacas" />
          <h1 className="lister-title">John Muir Alpacas</h1>
          <p className="lister-detail">
          John Muir Alpacas brings you alpaca walks and activities in a stunning location. Thoroughly spoiled for scenery, with a beautiful rugged coast line and picturesque woodlands it is ideally situated to take you on a one-of-a-kind alpaca experience you will never forget!
        </p>
        <br />
        <a className="link-lister" href="https://www.johnmuiralpacas.co.uk/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/@55.9935461,-2.5802189,15.52z"> view location </a>
        <br /><br />
        </div>
        

        
        <div className="lister-item">
          <img src={jmcountrypark} alt="john muir country park" />
          <h1 className="lister-title">John Muir Country Park</h1>
          <p className="lister-detail">
          John Muir Country Park is located near the town of Dunbar. It is named after the famous naturalist and geologist. The park covers an area of 713.5 hectares (1,763 acres), stretching along 13 kilometres (8 miles) of coastline from Pfeffer Sands to Dunbar Castle.
        </p>
        <br />
        <a className="link-lister" href="https://www.visitscotland.com/info/see-do/john-muir-country-park-p252991"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/Linkfield+Car+Park/@55.9957824,-2.5744944,15.71z/data=!4m14!1m8!2m7!1sjohn+muir+country+park!3m5!1sjohn+muir+country+park!2s55.997898,+-2.574802!4m2!1d-2.5748023!2d55.9978975!3m4!1s0x48870588234be289:0x70b9a9285eb391fd!8m2!3d55.9991429!4d-2.560662"> view location </a>
        <br /><br />
        </div>
        
      
        <div className="lister-item">
          <img src={eastlinks} alt="eastlinks" />
          <h1 className="lister-title">East Links Family Park</h1>
          <p className="lister-detail">
          East Links Family Park is the ideal family day out where adults have as much fun as kids!  Situated just outside Dunbar, it has become one of the premier visitor attractions in South East Scotland. East Links is a farm themed activity park that brings out the child in all ages!
        </p>
        <br />
        <a className="link-lister" href="http://www.eastlinks.co.uk/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/East+Links+Family+Park/@55.9957824,-2.5744944,15.71z/data=!4m14!1m8!2m7!1sjohn+muir+country+park!3m5!1sjohn+muir+country+park!2s55.997898,+-2.574802!4m2!1d-2.5748023!2d55.9978975!3m4!1s0x0:0x7966ee098c5456f!8m2!3d55.9988324!4d-2.5639531"> view location </a>
        <br /><br />
        </div>
      

        
        <div className="lister-item">
          <img src={foxlake} alt="foxlake" />
          <h1 className="lister-title">Foxlake Adventures</h1>
          <p className="lister-detail">
          Foxlake Adventures is Scotland’s first cable wakeboarding park along with the UK’s only ropes course constructed over water. It located in the heart of East Lothian, on the outskirts of Dunbar, nestled in a beautiful woodland on the edge of the John Muir Way. 
          </p>
          <br />
        <a className="link-lister" href="https://www.foxlake.co.uk/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/Foxlake+Adventures+CIC/@55.991372,-2.5906687,17z/data=!3m1!4b1!4m14!1m8!2m7!1sjohn+muir+country+park!3m5!1sjohn+muir+country+park!2s55.997898,+-2.574802!4m2!1d-2.5748023!2d55.9978975!3m4!1s0x48870f508f87c00b:0xb5b2ba804a01a6a!8m2!3d55.991372!4d-2.58848"> view location </a>
        <br /><br />
        </div>

        <div className="lister-item">
          <img src={strawberrybarn} alt="strawberry barn" />
          <h1 className="lister-title">Strawberry Barn</h1>
          <p className="lister-detail">
          The Strawberry Barn is a beautiful destination for all the family to enjoy. Located just outside Dunbar, it is easily accessed from the A1. Specifically designed for easy access to 25,000 Strawberry Plants the Pick Your Own experience is a memorable day out in July and August.
          </p>
          <br />
        <a className="link-lister" href="https://thestrawberrybarn.co.uk/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/The+Strawberry+Barn/@55.989619,-2.5638659,17z/data=!3m1!4b1!4m5!3m4!1s0x48870f6f051d9b97:0xd2dc8fc72e7bf86b!8m2!3d55.989619!4d-2.5616772"> view location </a>
        <br /><br />
        </div>

        <div className="lister-item">
          <img src={dunbargolf} alt="dunbar golf club" />
          <h1 className="lister-title">Dunbar Golf Club</h1>
          <p className="lister-detail">
          To play on the Open qualifying championship links is to play within yards of waves as they crash onto the rocky shore. Pit yourself against a course made by nature and then man's best efforts over 150 years. Walk in the footsteps of some of the greatest golfers in the world.
          </p>
          <br />
        <a className="link-lister" href="https://www.dunbargolfclub.com/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/Dunbar+Golf+Club/@55.9976763,-2.5017927,17z/data=!3m1!4b1!4m5!3m4!1s0x48870ff96688337b:0xae488b1644fe2414!8m2!3d55.9976763!4d-2.499604"> view location </a>
        <br /><br />
        </div>

        <div className="lister-item">
          <img src={coasttocoast} alt="coast to coast" />
          <h1 className="lister-title">Coast To Coast</h1>
          <p className="lister-detail">
          Coast to Coast is Scotland’s premier destination for surfing and coastal adventure sports. They provide high quality instruction with a team of experienced instructors offering innovative lessons and courses in the sports of Surfing, Stand Up Paddling and Coasteering.
          </p>
          <br />
        <a className="link-lister" href="https://www.c2csurfschool.com/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/Coast+to+Coast+Surf+School/@56.0001753,-2.5452974,17z/data=!3m1!4b1!4m5!3m4!1s0x48870ff55e0c9df1:0x5d1e817e86888564!8m2!3d56.0001753!4d-2.5431087"> view location </a>
        <br /><br />
        </div>
      

        </div>
        </div>

    

      
    </>
        
        )
        }

export default AttractionsLister;