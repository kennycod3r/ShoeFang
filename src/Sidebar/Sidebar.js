import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import CloseButton from "../components/CloseButton";

export default function Sidebar({ handleChange, handleSidebar }) {
  return (
    <>
      <section className="sidebar">
        <Price handleChange={handleChange} />
        <Category handleChange={handleChange} />
        <Colors handleChange={handleChange} />
        <CloseButton handleSidebar={handleSidebar} />
      </section>
    </>
  );
}
