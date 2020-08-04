import React, {useEffect} from "react";
import "../Lister.css";
import crunchycarrot from "../../assets/highstreetimg/crunchycarrot.jpg"
import communitybakery from "../../assets/highstreetimg/communitybakery.jpg"
import foundgallery from "../../assets/highstreetimg/foundgallery.jpg"
import flux from "../../assets/highstreetimg/fluxstore.png"
import sweetiebank from "../../assets/highstreetimg/sweetiebank.png"
import makery from "../../assets/highstreetimg/makery.jpg"
import belhavenbikes from "../../assets/highstreetimg/belhavenbikes.jpg"
import knox from "../../assets/highstreetimg/knox.jpg"
import bowesports from "../../assets/highstreetimg/bowesports.jpg"

const HighStreetLister = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
});

    return (

    <>
      <h1 className="lister-main-header">Dunbar High Street</h1>

      <body>
          <div className="lister-body-container">
            <p className="lister-body-text">
            Dunbar's High street is without doubt the Hub of the town, it's shops, cafes and restaurants offer a wide range of choice to both residents and visitors alike. Priding themselves on a friendly and helpful service the majority of the high street is still independent trades where you will find unique one off shops and cafes.
              <br /><br />
            </p>
          </div>
        </body>

      <div className="lister-banner">

      <div className="lister-container">

      
        <div className="lister-item">
          <img src={crunchycarrot} alt="crunchy carrot" />
          <h1 className="lister-title"> The Crunchy Carrot</h1>
          <p className="lister-detail">
          The Crunchy Carrot has been at the heart of Dunbar’s High Street for almost 20 years. Now, community-owned, the greengrocer continues to offer an imaginative and extensive selection of whole foods and larder treats, plus a unique range of sustainable household and toiletry products.
        </p>
        <br />
        <a className="link-lister" href="https://communitycarrot.scot/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/Crunchy+Carrot/@56.0012101,-2.5171974,17z/data=!3m1!4b1!4m5!3m4!1s0x4887055fd76fa90b:0x20acacd1d1659efa!8m2!3d56.0012101!4d-2.5150087"> view location </a>
        <br /><br />
        </div>
        

        
        <div className="lister-item">
          <img src={communitybakery} alt="community bakery" />
          <h1 className="lister-title"> The Community Bakery</h1>
          <p className="lister-detail">
          Dunbar Community Bakery bake high quality sourdough and yeasted breads as well as everyday baked goods, including sausage rolls, pies, cakes and patisserie, using the best ingredients and traditional, time-tested recipes. The bakery team are busy up to 18 hours a day to give customers fresh bread and cakes.
        </p>
        <br />
        <a className="link-lister" href="https://thebakerydunbar.co.uk/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/Dunbar+Community+Bakery/@56.0012101,-2.5171974,17z/data=!4m12!1m6!3m5!1s0x4887055fd76fa90b:0x20acacd1d1659efa!2sCrunchy+Carrot!8m2!3d56.0012101!4d-2.5150087!3m4!1s0x488705607bc19fd5:0xede7e3666ee86125!8m2!3d56.001759!4d-2.5159965"> view location </a>
        <br /><br />
        </div>
        

        
        <div className="lister-item">
          <img src={makery} alt="the makery" />
          <h1 className="lister-title"> The Makery</h1>
          <p className="lister-detail">
          The Makery is a shop to buy exciting jewellery, art, cards and prints – or to feel inspired to create your own. It’s a service to design logos, branding, leaflets, posters – whatever you need to support your own business or community projects. It’s a happy, inspiring hub to let your creativity shine.
        </p>
        <br />
        <a className="link-lister" href="https://www.themakerydunbar.com/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/The+Makery+Dunbar/@56.0024455,-2.5170601,19z/data=!3m1!4b1!4m5!3m4!1s0x4887057c44441bc3:0x7c84c955675bdba0!8m2!3d56.0024455!4d-2.5165129"> view location </a>
        <br /><br />
        </div>
        

        
        <div className="lister-item">
          <img src={foundgallery} alt="found gallery" />
          <h1 className="lister-title"> Found Gallery</h1>
          <p className="lister-detail">
          Found presents an eclectic mix of hand-made beautiful things.  They showcase an ever changing and often quirky selection of pieces to surprise and delight.  Alongside fused glass jewellery and photographic glass panels they exhibit arts and crafts from both emerging and established artists and makers.
        </p>
        <br />
        <a className="link-lister" href="https://www.thefoundgallery.co.uk/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/The+Found+Gallery/@56.0021151,-2.5183489,17z/data=!3m1!4b1!4m5!3m4!1s0x488705607dc1efaf:0xcae0fa304fd82838!8m2!3d56.0021151!4d-2.5161602?hl=en-GB"> view location </a>
        <br /><br />
        </div>
      

      
        <div className="lister-item">
          <img src={flux} alt="flux" />
          <h1 className="lister-title"> Flux</h1>
          <p className="lister-detail">
          Flux is an independent gift shop located on Dunbar's High Street and the team also have a well established shop in Leith, Edinburgh. Small but bursting with charisma and stocked full with a wide variety of lovely gifts it is now firmly established amongst the locals as one of East Lothian's hidden gems. 
        </p>
        <br />
        <a className="link-lister" href="https://get2flux.co.uk/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/Flux/@56.0020636,-2.5183029,17z/data=!3m1!4b1!4m5!3m4!1s0x488705607d0a1ae1:0x418408beeac7772e!8m2!3d56.0020636!4d-2.5161141?hl=en-GB"> view location </a>
        <br /><br />
        </div>
      

        
        <div className="lister-item">
          <img src={sweetiebank} alt="sweetie bank" />
          <h1 className="lister-title"> The Sweetie Bank</h1>
          <p className="lister-detail">
          The Sweetie Bank is located in a former bank on Dunbar's High Street. Whether you are looking for some hand made chocolates, a quarter of your favorite sweets, some pick n mix, a quality ice cream or a steaming cup of coffee or hot chocolate you will always be guaranteed a warm welcome!!
        </p>
        <br />
        <a className="link-lister" href="https://www.facebook.com/DunbarSweetShop/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/The+Sweetie+Bank/@56.0026251,-2.5182386,17z/data=!3m1!4b1!4m5!3m4!1s0x488705df68911b91:0x5342dd3192e9220d!8m2!3d56.0026251!4d-2.5160499?hl=en-GB"> view location </a>
        <br /><br />
        </div>


        <div className="lister-item">
          <img src={belhavenbikes} alt="belhaven bikes" />
          <h1 className="lister-title"> Belhaven Bikes</h1>
          <p className="lister-detail">
          Belhaven Bikes sell and rent bikes, ebikes, skateboards and scooters for all generations to have fun on and with a wide choice so all tastes and budgets are catered for. Colin can also get you back on the road again with a service or repairs in his Cytech Accredited workshop.
        </p>
        <br />
        <a className="link-lister" href="https://www.belhavenbikes.co.uk/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/Belhaven+Bikes/@56.0015483,-2.5280743,17z/data=!3m1!4b1!4m5!3m4!1s0x48870562571736db:0xbdf3b7202ae054c1!8m2!3d56.0015483!4d-2.5258856"> view location </a>
        <br /><br />
        </div>

        <div className="lister-item">
          <img src={knox} alt="knox newsagents" />
          <h1 className="lister-title"> Knox's</h1>
          <p className="lister-detail">
          Knox Newsagent and Garden Centre is very friendly family run business. The staff are super helpful and go above and beyond. The shop is like a tardis with everthing you need from a newsagents and garden centre, including a reat selection of plants at reasonable very prices."
        </p>
        <br />
        <a className="link-lister" href="https://www.facebook.com/pages/category/Garden-Center/Knox-Garden-Centre-338599769495916/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/Knox+Newsagents/@56.0033642,-2.5171874,15z/data=!4m5!3m4!1s0x0:0xb17d940d88602a75!8m2!3d56.0033642!4d-2.5171874"> view location </a>
        <br /><br />
        </div>

        <div className="lister-item">
          <img src={bowesports} alt="bowe sports shop" />
          <h1 className="lister-title"> Bowe Sports</h1>
          <p className="lister-detail">
          Looking for great casual clothes or sports goods, pop into Dunbar’s independent sport and leisurewear shop. Suppliers of sports equipment, clothing and footwear for all the family and stockists of many of the major sporting brands. They also stock surfing gear including wetsuits & boots.
        </p>
        <br />
        <a className="link-lister" href="https://www.bowesports.co.uk/"> visit website </a>
        <br /><br />
        <a className="map-link" href="https://www.google.com/maps/place/Bowe+Sports+%26+Leisurewear/@56.001612,-2.5154118,15z/data=!4m2!3m1!1s0x0:0x36f3dc8a27882639?sa=X&ved=2ahUKEwipmPeP0f_qAhWGasAKHYnsCZUQ_BIwCnoECBQQCA"> view location </a>
        <br /><br />
        </div>
      
      </div>
      </div>

    </>
    )
}

export default HighStreetLister;