import AllCategoryCard from "../components/AllCategoryCard";
import "./AllCategory.css";
import nikesvg from '../assets/nike.svg';
import adidasSvg from '../assets/adidas.svg';
import TRack from "../img/tennisRack.webp";

import allcategorydata from "../db/allcategorydata";
import { useState } from "react";

export default function AllCategorySection() {
  //let newProducts = { new: "New", discount: 20 };

  const[acd, setAcd] = useState(allcategorydata)

  return (
    <>
      <div className="flexSpaceBetween sponsor-wrapper">
        <img
          className="flexCenter sponsor"
          src="https://cdn.sanity.io/images/9aznesrq/production/a9d1fffde475ca49577f589aed650101349aff10-800x500.png?w=600&q=80&auto=format"
          alt="sponsorImg"
        ></img>
        <img
          className="flexCenter sponsor"
          src="https://cdn.sanity.io/images/9aznesrq/production/b285b74e87cc8cb6d67797644f1dfea406d23136-3840x2160.png?w=600&q=80&auto=format"
          alt="sponsorImg"
        ></img>
        <img
          className="flexCenter sponsor"
          src="https://cdn.sanity.io/images/9aznesrq/production/4aa1e5499acf87ea77d4493a0066d518fbb963d7-800x500.png?w=600&q=80&auto=format"
          alt="sponsorImg"
        ></img>
        <img
          className="flexCenter sponsor"
          src={adidasSvg}
          alt="sponsorImg"
        ></img>
        <img
          className="flexCenter sponsor"
          src={nikesvg}
          alt="sponsorImg"
        ></img>
      </div>

      <h1 className="recommended-title">Category: <span className="cat-item">Nikes</span></h1>
      <div className="category-section">
        {acd.map((item) => {
          return (
            <AllCategoryCard
              key={item.description}
              image={item.img}
              title={item.title}
              description ={item.description}
            />
          );
        })}
      </div>
    </>
  );
}
