import { BsFillBagHeartFill } from "react-icons/bs";
import stripped from "../img/plainT.webp";
import LogoFloater from "./logoFloater";

export default function Card({
  img,
  title,
  star,
  reviews,
  newPrice,
  prevPrice,
  handleBag,
}) {
  function handleBagData() {
    let newBagData = {
      ItemTitle: title,
      ItemPrice: newPrice,
    };

    handleBag(newBagData);
  }

  return (
    <>
      <section className="card">
       <div className="card-img-div"> <img src={img} alt="shoe" className="card-img" /></div>

        <div className="card-details">
          <h3 className="card-title">{title}</h3>

          <section className="card-reviews">
            {star}
            {star}
            {star}
            {star}
            <p className="small light-grey">{reviews}</p>
          </section>
          <div className="card-price">
            <div className="price">
              <p>
                <del>{prevPrice}</del>£{newPrice}
              </p>
            </div>

            <div className="bag" onClick={handleBagData}>
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
