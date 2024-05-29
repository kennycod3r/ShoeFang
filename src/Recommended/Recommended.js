
import SearchInput from "../SearchInput/SearchInput";
import Buttons from "../components/Buttons";
import "./Recommended.css";
import Colors from "./Colors/Colors";


export default function Recommended({ handleClick, query, handleInputChange,handleChange }) {
  return (
    <div className="recommended-section">
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-query">
        <div className="recommended-flex">
          <Buttons value="" title="All" onClickHandler={handleClick} />
          <Buttons value="Nike" title="Nike" onClickHandler={handleClick} />
          <Buttons value="Adidas" title="Adidas" onClickHandler={handleClick} />
          <Buttons value="Puma" title="Puma" onClickHandler={handleClick} />
          <Buttons value="Vans" title="Vans" onClickHandler={handleClick} />
        </div>
        <div className="colorss">
            <Colors handleChange={handleChange} />
        </div>
        <div className="search-div">
          <SearchInput query={query} handleInputChange={handleInputChange} />
        </div>
      </div>
    </div>
  );
}
