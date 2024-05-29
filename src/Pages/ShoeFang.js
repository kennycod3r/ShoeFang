import { useState, useCallback, useMemo } from "react";

import Products from "../Products/Products";
import Recommended from "../Recommended/Recommended";
import Sidebar from "../Sidebar/Sidebar";
import storeData from "../db/data";
import HeadText from "../HeadText/HeadText";
import Hero from "../Hero/Hero";
import AllCategorySection from "../All Category/AllCategorySection";
import Footer from "../Footer/Footer";
import HeroTwo from "../Hero2/HeroTwo";
import AllCategoryCard from "../components/AllCategoryCard";

export default function ShoeFang() {
  //states
  const [closeSidebar, setCloseSidebar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [bag, setBag] = useState([]);
  const [query, setQuery] = useState("");
  const [total, setTotal] = useState(0);

  const handleBag = useCallback(
    (newBagData) => {
      setBag((prevState) => {
        const updatedBag = [...prevState, newBagData];
        return updatedBag;
      });
      setTotal((prevState) => prevState + Number(newBagData.newPrice));
    },
    [setBag, setTotal]
  );

  const hanldleRemoveBagItem = useCallback(
    (imageId, newItemPrice) => {
      setBag((prevState) => {
        const filteredBagData = prevState.filter((item) => item.imageId !== imageId);
        return filteredBagData
      });
      setTotal((prevState) => prevState - Number(newItemPrice));
    },
    [setBag]
  );

  const handleSidebar = useCallback(() => {
    setCloseSidebar((prevState) => !prevState);
  }, [setCloseSidebar]);

  const handleInputChange = useCallback(
    (event) => {
      setQuery(event.target.value);
    },
    [setQuery]
  );

  const handleRadioChange = useCallback(
    (event) => {
      setSelectedCategory(event.target.value);
    },
    [setSelectedCategory]
  );

  const handleClick = useCallback(
    (event) => {
      setSelectedCategory(event.target.value);
    },
    [setSelectedCategory]
  );

  const filteredItems = useMemo(() => {
    return storeData.filter((storeItem) =>
      storeItem.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const filteredData = useCallback(
    (storeData, selected, query) => {
      let filteredStoreData = storeData;

      if (query) {
        filteredStoreData = filteredItems;
      }

      if (selected) {
        filteredStoreData = filteredStoreData.filter(
          ({ color, company, title }) =>
            color === selected ||
            company === selected ||
            title === selected |
            title === selected
        );
      }

      return filteredStoreData.map(
        ({ img, title, newPrice, prevPrice, id }) => (
          <AllCategoryCard
            key={id}
            image={img}
            title={title}
            newPrice={newPrice}
            prevPrice={prevPrice}
            imageId={id}
            handleBag={handleBag}
          />
        )
      );
    },
    [filteredItems, handleBag]
  );

  const result = filteredData(storeData, selectedCategory, query);

  return (
    <>
      <HeadText
        handleSidebar={handleSidebar}
        total={total}
        bagData={bag}
        hanldleRemoveBagItem={hanldleRemoveBagItem}
      />

      {closeSidebar && (
        <Sidebar
          handleSidebar={handleSidebar}
        />
      )}

      <Hero />
      <AllCategorySection handleBag={handleBag} />
      <Recommended
        handleClick={handleClick}
        query={query}
        handleChange={handleRadioChange}
        handleInputChange={handleInputChange}
      />
      <Products result={result} />
      <HeroTwo />
      <Footer />
    </>
  );
}
