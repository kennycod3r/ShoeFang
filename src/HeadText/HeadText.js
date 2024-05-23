import Promo from "../Promo/promo";
import fangs from "../assets/fangs.svg";
//import { FiHeart } from 'react-icons/fi';
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
        <div className="inner-div">
          <div className="div-one">
            <HamburgerMenu handleSidebar={handleSidebar} />
            <div>JOURNAL</div>
            <div>ABOUT</div>
            <div>SALE</div>
            <div>SHOP</div>
          </div>
          <HamburgerMenu handleSidebar={handleSidebar} showMobile="showMobile" />
          <div className="flexCenter div-two">
            <a href="www.nonw.com" className="head-text">
              ShoeFang<img src={fangs} className="fangs" alt="fang" />
            </a>
          </div>
          <div className="showMobile bag-mobile" onClick={handleBagOpen}>
            BAG ({bagData.length})
          </div>
          <div className="div-one div-three">
            <div className="flexSpaceBetween" onClick={handleBagOpen}>
              BAG ({bagData.length})
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
