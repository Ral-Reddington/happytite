import React from "react";
import recipe_1 from "../img/recipe_1.png";
import recipe_2 from "../img/recipe_2.png";
import recipe_3 from "../img/recipe_3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TrendingComponent = () => {
  const responsive  = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="trending-component">
        <div
          className="py-3"
          style={{ marginLeft: "200px", marginTop: "120px" }}
        >
          <h2 className="">Trending recipes of the day</h2>
          <span className="">
            Choose recipes from a list of the most selected recipes today world
            wide
          </span>
          <div className="mt-4">
            <Carousel responsive={responsive} showDots={true}>
              <div>
                <img src={recipe_1} alt="" />
              </div>
              <div>
                <img src={recipe_2} alt="" />
              </div>
              <div>
                <img src={recipe_3} alt="" />
              </div>
              <div>
                <img src={recipe_1} alt="" />
              </div>
              <div>
                <img src={recipe_2} alt="" />
              </div>
              <div>
                <img src={recipe_3} alt="" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingComponent;
