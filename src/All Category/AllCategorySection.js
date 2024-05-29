import AllCategoryCard from "../components/AllCategoryCard";
import "./AllCategory.css";
import React from "react";
import nikelogo2 from "../assets/nikelogo2.svg";
import adidasSvg from "../assets/adidas2.svg";
import allcategorydata from "../db/allcategorydata";

export default function AllCategorySection({handleBag, hanldleRemoveBagItem}) {
  return (
    <>
      <div className="sponsor-wrapper">
        <img className="flexCenter sponsor" src={nikelogo2} alt="Nike" />
        <img className="flexCenter sponsor" src="https://cdn.sanity.io/images/9aznesrq/production/a9d1fffde475ca49577f589aed650101349aff10-800x500.png?w=600&q=80&auto=format" alt="Sponsor1" />
        <img className="flexCenter sponsor" src="https://cdn.sanity.io/images/9aznesrq/production/b285b74e87cc8cb6d67797644f1dfea406d23136-3840x2160.png?w=600&q=80&auto=format" alt="Sponsor2" />
        <img className="flexCenter sponsor" src="https://cdn.sanity.io/images/9aznesrq/production/4aa1e5499acf87ea77d4493a0066d518fbb963d7-800x500.png?w=600&q=80&auto=format" alt="Sponsor3" />
        <img className="flexCenter sponsor" src={adidasSvg} alt="Adidas" />
      </div>

      <h1 className="recommended-title cat-title headtext-small">
        Category: <span className="cat-item">Nikes <img className="flexCenter sponsor" src={nikelogo2} alt="Nike" /></span>
      </h1>
      
      <div className="category-section">
        {allcategorydata.map((item) => (
          <AllCategoryCard
            key={item.description}
            image={item.img}
            title={item.title}
            newPrice={item.newPrice}
            prevPrice={item.prevPrice}
            handleBag={handleBag}
            description={item.description}
            imageId={item.id}
            
          />
        ))}
      </div>
    </>
  );
}
