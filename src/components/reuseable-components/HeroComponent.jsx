import React from "react";
import heroImage from "../img/hero-image-food.svg";
import cardinalhealth from "../img/cardinalhealth.svg";
import carex from "../img/carex.svg";
import Clinica from "../img/Clinica.svg";
import cvshealth from "../img/cvshealth.svg";
import flatiron from "../img/flatiron.svg";
import hinge from "../img/hinge.svg";

const HeroComponent = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="d-flex ">
        <div style={{ marginRight: "200px", marginTop: "120px" }}>
          <h1 className="textcolor">The best place to </h1>
          <h1 className="textcolor">get healthy</h1>
          <h1 >Recipes.</h1>
          <div className="" style={{ marginTop: "30px" }}>
            <p>
              <b className="textcolor">
                Countless healthy recipes to choose from <br />
                to customize meal plans just for you <br />
                according to any diet you want.
              </b>
            </p>
          </div>
          <div style={{ marginTop: "40px" }} className="d-flex">
            <div className="me-4">
              <button className="button-orange p-2">Create meal plan</button>
            </div>
            <div>
              <button className="button-green p-2">Explore recipes</button>
            </div>
          </div>
          {/* Companies that trust us */}
          <div className="mt-5">
            <h4 style={{ marginTop: "100px", marginBottom: "40px" }}>
              Companies that trust us
            </h4>
            <div className="d-flex mb-4">
              <div className="">
                <img src={Clinica} />
              </div>
              <div className="px-4">
                <img src={cardinalhealth} />
              </div>
              <div className="">
                <img src={cvshealth} />
              </div>
            </div>
            <div className="d-flex">
              <div className="">
                <img src={carex} />
              </div>
              <div className="px-4">
                <img src={flatiron} />
              </div>
              <div className="">
                <img src={hinge} />
              </div>
            </div>
          </div>
          {/* Companies that trust us */}
        </div>
        <div className="" style={{ marginTop: "114px" }}>
          <img width={470} height={440} src={heroImage} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
