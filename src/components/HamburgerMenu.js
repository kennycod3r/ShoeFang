import { RxHamburgerMenu } from "react-icons/rx";
export default function HamburgerMenu({ handleSidebar}) {

  return (
    <div className="hamburger dontSbs" onClick={handleSidebar}>
      <RxHamburgerMenu className="hamburger-icon"/>
    </div>
  );
}
