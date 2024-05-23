import "./HeroTwo.css";
import ShoeBox from "../img/shoeBox.webp";
import nikeshoe1 from "../img/nikeshoe1.webp";
import nikeshoe2 from "../img/nikeshoe2.webp";
import nikesvg from "../assets/nike.svg";


export default function HeroTwo() {
  return (
    <section className="hero2">
      <div className="hero2-container">
        <div className="text-button-container">
          <h2>
            NIRVANA IN EVERY <span>BOX</span>
            <br />
            YOU Purchase.
          </h2>
          <div className="nikesvg-des">
            <img src={nikesvg} alt="sponsorImg"/>
            <p className="small"> Travis Scott x Air Jordan 1 Low Golf “Olive”</p>
          </div>
          <div className="hero2-img-container">
            <div className="ad-card">
              <img src={ShoeBox} alt="shoebox" />
            </div>
            <div className="ad-card">
              <img src={nikeshoe1} alt="nikeshoe1" />
            </div>
            <div className="ad-card">
              <img src={nikeshoe2} alt="nikeshoe2" />
            </div>
          </div>
        </div>
        <p className="small pre-order">place a pre-order?</p>
      </div>
    </section>
  );
}
