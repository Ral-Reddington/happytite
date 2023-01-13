import React from "react";
import Avocado from "../img/Avocado.svg";
import culliflower from "../img/culiflower.svg";
import kale from "../img/kale.svg";
import pizza from "../img/pizza.svg";
import Skillet from "../img/Skillet.svg";
import Likeactive from "../img/Likeactive.svg";
import Likedefault from "../img/Likedefault.svg";

const TrendingComponent = () => {
  return (
    <>
      <div className="trending-bg-color">
        <div style={{ marginLeft: "200px", marginTop: "120px" }}>
          <div style={{ paddingTop: "80px" }}>
            <h2>Trending recipes of the day</h2>
            <p>
              Choose recipes from a list of the most selected recipes today
              world wide
            </p>
          </div>
          <div className="d-flex justify-content-between pb-5">
            <div className="bg-primary">
              <div className="d-flex">
                <div className="image-styling">
                  <div>
                    <img src={Likedefault} />
                  </div>
                  <div>
                    <img src={pizza} alt="pizza pic" />
                  </div>
                </div>

                <div>Right</div>
              </div>
              <div>this recipe</div>
            </div>

            <div className="bg-primary">edet</div>
            <div className="bg-primary">edet</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingComponent;
