//import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ColorPicker from "./colorPicker";

export default function AllCategoryCard({ image, description, title }) {
  //const [hovered, setHovered] = useState(true);

  let animateCircle = {
    animation: "pulse .4s ease",
    animationDelay: ".5s",
  };

  function handleHover() {
    //setHovered(!hovered);
  }

  function handleHover2() {
    //setHovered(true);
  }
  //onMouseEnter={handleHover}
  //onMouseLeave={handleHover2}
  return (
    <>
      <section className="Ac-card">
        <div>
          <a href="www.nowhere.com" className="ac-item-wrapper">
            <div
              className="img-absolute-div"
              style={{
                backgroundImage: `url(${image})`,
                objectFit: "contain",
                width: "100%",
              }}
            >
              
                <div className="img-promo-div flexBase">
                  <div className="new-div">Sales</div>
                  <div className="new-div img-promo">20%</div>
                </div>
              

              <div
                className="flexCenter shop-circle"
              >
                <AiOutlineShoppingCart className="nav-icons" />
              </div>

              <ColorPicker hovered={false} />
            </div>
          </a>
          <div className="ac-card-details">
            <h3>{title}</h3>
            <p className="small light-grey">{description}</p>
          </div>
        </div>
      </section>
    </>
  );
}
