//import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import unavailable from "../img/unavailable.webp";
import Discount from "./Discount";

export default function AllCategoryCard({
  image,
  description,
  title,
  newPrice,
  prevPrice,
  handleBag,
  imageId,
}) {
  function handleBagData() {
    const newBagData = {
      title,
      newPrice,
      prevPrice,
      imageUrl: image,
      imageId,
    };
    handleBag(newBagData);
  }

  return (
    <section className="ac-card">
      <div>
        <div className="ac-item-wrapper">
          <div
            className="img-absolute-div"
            style={{
              backgroundImage: `url(${image || unavailable})`,
            }}
          >
            <Discount />
            <div className="flexCenter shop-circle" onClick={handleBagData}>
              <AiOutlineShoppingCart className="nav-icons" />
            </div>
          </div>
        </div>
        <div className="ac-card-details">
          <h3>{title}</h3>
          <p className={`small ${description ? "light-grey" : ""}`}>
            {description ? (
              description
            ) : (
              <>
                <del>{prevPrice}</del> £{newPrice}
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
