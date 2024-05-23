//import Navigation from "./navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import Card from "./components/Card";
import storeData from "./db/data";
import HeadText from "./HeadText/HeadText";
import Hero from "./Hero/Hero";
import AllCategorySection from "./All Category/AllCategorySection";
import Footer from "./Footer/Footer";
import HeroTwo from "./Hero2/HeroTwo";

function App() {
  const [closeSidebar, setCloseSidebar] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [bag, setBag] = useState([]);

  function handleBag(newBagData) {
    setBag(prevState => {
      const updatedBagData = [...prevState, newBagData]
      return updatedBagData;
    });
  }

  //--handleSdidebar
  function handleSidebar() {
    setCloseSidebar((prevState) => !prevState);
  }

  //----------input filter function-----------
  const [query, setQuery] = useState("");

  //input value handler
  function handleInputChange(event) {
    setQuery(event.target.value);
  }

//read more
  const filteredItems = storeData.filter((storeItem) => {
    return (
      storeItem.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
    );
  });

  //----------radio filter function-----------
  function handleRadioChange(event) {
    setSelectedCategory(event.target.value);
  }

  //----------Buttons filter function-----------
  function handleClick(event) {
    setSelectedCategory(event.target.value);
  }

  //----------Main/Parent filter-----------
  function filteredData(storeData, selected, query) {
    let filteredStoreData = storeData;

    //filtering input Items
    if (query) {
      filteredStoreData = filteredItems;
    }

    //selector filter

    if (selected) {
      filteredStoreData = filteredStoreData.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          title === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredStoreData.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          handleBag={handleBag}
        />
      )
    );
  }

  const result = filteredData(storeData, selectedCategory, query);

  return (
    <>
      <HeadText handleSidebar={handleSidebar} bagData={bag} />

      {closeSidebar && <Sidebar handleChange={handleRadioChange} handleSidebar={handleSidebar}/>}

      <Hero />
      <AllCategorySection />

      <Recommended
        handleClick={handleClick}
        query={query}
        handleInputChange={handleInputChange}
      />
      <Products result={result} />
      <HeroTwo />
      <Footer />
    </>
  );
}

export default App;
