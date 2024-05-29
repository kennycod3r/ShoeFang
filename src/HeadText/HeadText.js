import React, { useState } from "react";
import Promo from "../Promo/promo";
import fangs from "../assets/fangs.svg";
import { AiOutlineUserAdd } from "react-icons/ai";
import "./HeadText.css";
import { Outlet, Link } from "react-router-dom";
import BagItems from "../BagItems/BagItems";
import HamburgerMenu from "../components/HamburgerMenu";

export default function HeadText({
  handleSidebar,
  bagData,
  total,
  hanldleRemoveBagItem,
}) {
const [bagOpen, setBagOpen] = useState(false);

  function handleBagOpen() {
    setBagOpen((prevState) => !prevState);
  }

  return (
    <>
      <Promo />
      <div className="flexCenter outer-div">
        <div className="inner-div">
          <div className="div-one" id="sidebar">
            <HamburgerMenu handleSidebar={handleSidebar} />
            <div className="show-mobile">
              <Link to="/Journal/1">JOURNAL</Link>
            </div>
            <div className="show-mobile">ABOUT</div>
            {bagData ? (
              <>
                <div className="show-mobile">SALE</div>
                <div className="show-mobile">SHOP</div>
              </>
            ) : null}
          </div>

          <div className="flexCenter div-two">
            <Link to="/" className="head-text">
              ShoeFang
              <img src={fangs} className="fangs" alt="fang" />
            </Link>
          </div>

          <div className="div-one div-three">
            {bagData ? (
              <div className="flexSpaceBetween" onClick={handleBagOpen}>
                BAG ({bagData ? bagData.length : null})
              </div>
            ) : null}
            <div className="show-mobile">ACCOUNT</div>
            <div className="acc-icon show-mobile">
              <AiOutlineUserAdd className="account-svg" />
            </div>
          </div>
        </div>
      </div>
      <div id="detail">
        <Outlet />
      </div>
      {bagOpen && (
        <BagItems
          bagData={bagData}
          bagOpen={bagOpen}
          total={total}
          handleBagOpen={handleBagOpen}
          hanldleRemoveBagItem={hanldleRemoveBagItem}
        />
      )}
    </>
  );
}
