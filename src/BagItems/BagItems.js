import ReactDOM from "react-dom";
import "./BagItems.css";
import React from "react";
import BagItem from "../components/BagItem";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import CloseButton from "../components/CloseButton";

export default function BagItems({
  total,
  bagData,
  bagOpen,
  handleBagOpen,
  hanldleRemoveBagItem,
}) {
  if (!bagOpen) return null;

  const bagSidebar = document.getElementById("bagSidebar");

  if (!bagSidebar) return null;

  return ReactDOM.createPortal(
    <div className={`Bag-item-section`} style={{opacity: 1, animationDelay:"2ms"}}>
      {bagData.length > 0 ? (
        <>
          {bagData.map((item, index) => (
            <BagItem
              newItemTitle={item.title}
              newItemPrevPrice={item.prevPrice}
              newItemPrice={item.newPrice}
              key={Math.random() * index}
              handleBagOpen={handleBagOpen}
              bagData={bagData}
              imageUrl={item.imageUrl}
              imageId={item.imageId}
              hanldleRemoveBagItem={hanldleRemoveBagItem}
            />
          ))}
        </>
      ) : (
        <div className="bag-empty">
          <CloseButton onClick={handleBagOpen} />

          <div className="bag-empty-div purchase-img ">
            <GiShoppingCart className="bag-empty-cart" />
          </div>
          <p>Oops! Looks like your bag is empty.</p>

          <Link
            to={`/`}
            className="cont-shopping btn-link"
            onClick={handleBagOpen}
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      )}
      {bagData.length > 0 && (
        <>
          <div className="total-div">
            <p>Subtotal</p>
            <p className="total-price">£{total}.00</p>
          </div>

          <button className="checkout-btn">
            <Link to={`CheckOut/2`} className="btn-link">
              CHECKOUT
            </Link>
          </button>
        </>
      )}
    </div>,
    bagSidebar
  );
}
