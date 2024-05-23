import Promo from "../Promo/promo";
//import {FiHeart} from 'react-icons/fi';
import { AiOutlineUserAdd } from "react-icons/ai";

import "./HeadText.css";
import BagItems from "../BagItems/BagItems";
import { useState } from "react";
import HamburgerMenu from "../components/HamburgerMenu";

export default function HeadText({ handleSidebar, bagData }) {
  const [bagOpen, setBagOpen] = useState(false);

  function handleBagOpen() {
    setBagOpen(!bagOpen);
  }

  return (
    <>
      <Promo />

      <div className="flexCenter outer-div">
        <div className="flexSpaceBetween inner-div">
          <div className="flexSpaceBetween div-one">
            <HamburgerMenu handleSidebar={handleSidebar} />

            <div>JOURNAL</div>

            <div>ABOUT</div>

            <div>SALE</div>

            <div>SHOP</div>
          </div>

          <HamburgerMenu handleSidebar={handleSidebar} showMobile="showMobile" />

          <div className="flexCenter div-two">
            <a href="www.nonw.com" className="head-text">
              Noëlle
            </a>
          </div>

          <div className="showMobile bag-mobile" onClick={handleBagOpen}>
            BAG ({bagData.length - 1})
          </div>

          <div className="flexSpaceBetween div-one div-three">
            <div className="flexSpaceBetween" onClick={handleBagOpen}>
              BAG ({bagData.length - 1})
            </div>

            <div>ACCOUNT</div>

            <div className="acc-icon">
              <AiOutlineUserAdd className="nav-icons" />
            </div>
          </div>
        </div>
      </div>

      <BagItems bagData={bagData} bagOpen={bagOpen} />
    </>
  );
}
