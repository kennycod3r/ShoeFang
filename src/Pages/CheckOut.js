import React from "react";
import HeadText from "../HeadText/HeadText";

export default function CheckOut() {
  return (
    <>
      <HeadText />
      <div id="CheckOut">
        <div>
          <div className="hero-text checkout-grid">
            <div className="relative-img">
              
            </div>
            <div className="checkout-grid-col">
              <div className="article">Checkout</div>
              <h2 className="headtext-small">In Your Bag</h2>
              <ul>
                <li>image</li>
                <li>Title</li>
                <li>size</li>
                <li>Color</li>
                <li>QTY</li>
                <li>price</li>
              </ul>
            </div>
            <div className="checkout-grid-col">
              <ul>
                <li>Subtotal</li>
                <li>Estimated Shipping</li>
                <li>Estimated Tax</li>
                <li>Total</li>
                <li>QTY</li>
                <li>price</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

