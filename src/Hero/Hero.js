import { useState } from "react";
import "./Hero.css";
import { MdArrowOutward } from "react-icons/md";
import { BsBellFill, BsFillBellSlashFill } from "react-icons/bs";
import React from "react";

export default function Hero() {
  const [reminder, serReminder] = useState(false);
  return (
    <div className="hero">
      <div className="hero-inner-section">
        <div className="hero-sales-text">
          <h2 className="hero-headtext">
            Air Jordan 6 <br />
            “Reverse Oreo”
          </h2>
          <div className="aligned-paragraphs">
            <p>The Air Jordan 6 “Reverse Oreo” confirmed for a June 8, 2024.</p>
            <p>
              They're slated to release on Nike SNKRS,Jordan retailers for a
              standard price tag of $200.
            </p>
            <p>be sure to grab your pair on release date for retail here!</p>
          </div>
          <div className="article">read more in article <MdArrowOutward /></div>
        </div>
        <div className="relative-img">
          <img
            className="yzy"
            src="https://pbs.twimg.com/media/GODoPrdW4AEqgbT?format=jpg&name=large"
            alt="article"
          />

          <div
            className="flexCenter shop-circle reminder"
            onClick={() => serReminder((prevState) => !prevState)}
          >
            {!reminder ? (
              <BsFillBellSlashFill />
            ) : (
              <BsBellFill className="bag-icon" color="blue"/>
            )}
          </div>

          <div className="reminder-container">
            <p>{!reminder ? "set reminder?" : "reminder set!"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
