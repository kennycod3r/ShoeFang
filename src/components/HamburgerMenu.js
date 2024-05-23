//import { useState } from "react";
export default function HamburgerMenu({ handleSidebar, showMobile }) {
  //const [openNav, setOpenNav] = useState("hamburger hamburger--3dx");

  /*const handleNav = () => {
    setOpenNav((prevNav) =>
      prevNav.includes("is-active")
        ? "hamburger hamburger--3dx"
        : "hamburger hamburger--3dx is-active"
    );
    
  };*/
  return (
    <div className={`hamburger hamburger--3dx ${showMobile}`} onClick={handleSidebar}>
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </div>
  );
}
