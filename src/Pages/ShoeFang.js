import { useState, useCallback, useMemo } from "react";
import Products from "../Products/Products";
import Recommended from "../Recommended/Recommended";
import Sidebar from "../Sidebar/Sidebar";
import storeData from "../db/data";
import React from "react";
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
      setBag((prevState) => [...prevState, newBagData]);
      setTotal((prevState) => prevState + Number(newBagData.newPrice));
    },
    []
  );

  const handleRemoveBagItem = useCallback(
    (imageId, newItemPrice) => {
      setBag((prevState) => prevState.filter((item) => item.imageId !== imageId));
      setTotal((prevState) => prevState - Number(newItemPrice));
    },
    [setBag]
  );

  const handleSidebar = useCallback(() => {
    setCloseSidebar((prevState) => !prevState);
  }, []);

  const handleInputChange = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  const handleRadioChange = useCallback((event) => {
    setSelectedCategory(event.target.value);
  }, []);

  const handleClick = useCallback((event) => {
    setSelectedCategory(event.target.value);
  }, []);

  const filteredItems = useMemo(() => {
    return storeData.filter((storeItem) =>
      storeItem.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const filteredData = useMemo(() => {
    let filteredStoreData = storeData;

    if (query) {
      filteredStoreData = filteredItems;
    }

    if (selectedCategory) {
      filteredStoreData = filteredStoreData.filter(
        ({ color, company, title }) =>
          color === selectedCategory ||
          company === selectedCategory ||
          title === selectedCategory
      );
    }

    return filteredStoreData.map(({ img, title, newPrice, prevPrice, id }) => (
      <AllCategoryCard
        key={id}
        image={img}
        title={title}
        newPrice={newPrice}
        prevPrice={prevPrice}
        imageId={id}
        handleBag={handleBag}
      />
    ));
  }, [filteredItems, selectedCategory, handleBag,query]);

  return (
    <>
      <HeadText
        handleSidebar={handleSidebar}
        total={total}
        bagData={bag}
        hanldleRemoveBagItem={handleRemoveBagItem}
      />

      {closeSidebar && <Sidebar handleSidebar={handleSidebar} />}

      <Hero />
      <AllCategorySection handleBag={handleBag} />
      <Recommended
        handleClick={handleClick}
        query={query}
        handleChange={handleRadioChange}
        handleInputChange={handleInputChange}
      />
      <Products result={filteredData} />
      <HeroTwo />
      <Footer />
    </>
  );
}
