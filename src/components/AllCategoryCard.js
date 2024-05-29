//import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { PiShoppingCartSimple } from "react-icons/pi";
import unavailable from "../img/unavailable.webp";
import Discount from "./Discount";
import { useState } from "react";
import React from "react";


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
    setBagged(true);
  }

  const[bagged, setBagged] =  useState(false)
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
              { bagged ? <FaCartShopping className="nav-icons" /> : <PiShoppingCartSimple className="nav-icons" />}
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
