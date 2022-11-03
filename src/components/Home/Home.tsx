import React from "react";
import CarouselComp from "../Helpers/Carousel";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div className="home__caro">
      <CarouselComp/>
      </div>
      <div className="home__bgclr">
        {/* <div >
          <img className="home__img"
            src="https://img.freepik.com/free-photo/portrait-pretty-happy-girl-talking-mobile-phone_171337-2610.jpg?w=4000&t=st=1667452947~exp=1667453547~hmac=197dffbf839b3a71709b001f84ee4b8dbc2c2385e6777f1f5a6cda2581e1db7c"
            alt="dd"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
