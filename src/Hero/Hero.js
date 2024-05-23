import "./Hero.css";
import CloseButton from "../components/CloseButton";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <div className="hero-sales-text">
          <h2 className="hero-headtext">Air Jordan 6 <br/>“Reverse Oreo”</h2>
          <div className="aligned-paragraphs">
            <p>
              The Air Jordan 6 “Reverse Oreo” confirmed for a June 8,
              2024.
            </p>
            <p>
              They're slated to release on Nike SNKRS,Jordan
              retailers for a standard price tag of $200.
            </p>
            <p>be sure to grab your pair on release date for retail here!</p>
          </div>
          <div className="article">read more in article</div>
        </div>
        <div>
            <CloseButton/>
          <img
            className="yzy"
            src="https://pbs.twimg.com/media/GODoPrdW4AEqgbT?format=jpg&name=large"
            alt="article"
          />
        </div>
      </div>
    </div>
  );
}
