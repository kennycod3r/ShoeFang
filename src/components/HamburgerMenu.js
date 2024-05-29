import { RxHamburgerMenu } from "react-icons/rx";
import React from "react";

export default function HamburgerMenu({ handleSidebar}) {

  return (
    <div className="hamburger dontSbs" onClick={handleSidebar}>
      <RxHamburgerMenu className="hamburger-icon"/>
    </div>
  );
}
