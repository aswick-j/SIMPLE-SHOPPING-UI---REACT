import React from "react";
import Categories from "../Categories/Categories";
import CarouselComp from "../Helpers/Carousel";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="home__caro">
        <CarouselComp />
      </div>
      <div className="home__cate">
        <div className="con">
          <button className="three">
            Discover New Collection
          </button>
          <button className="four">
           Huge Discount for All
          </button>
          <button className="five">
            Rainy Day Offers
          </button>
        </div>
        <Categories/>
      </div>
    </div>
  );
};

export default Home;
