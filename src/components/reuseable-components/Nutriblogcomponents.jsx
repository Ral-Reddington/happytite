import React, { useState } from "react";
import nutriblogimage from "../img/nutriblogimage.svg";
import bookmarkiconactive from "../img/bookmarkiconactive.png";
import Bookmarkicondefault from "../img/Bookmarkicondefault.svg";
const Nutriblogcomponents = () => {
  const [bookmarkState, setBookmarkState] = useState(false);
  const [blogHoverState, setBlogHoverState] = useState(false);
  const handleBookmark = () => {
    setBookmarkState(!bookmarkState);
  };
  let divStyle = {
    backgroundColor: "",
  };
  // const handleHoverState = (e) => {
  //   e.target.style.background = "red";
  // };

  // const handleHoverStateOut = (e) => {
  //   e.target.style.background = "";
  // };

  if (blogHoverState) {
    divStyle.backgroundColor = "red";
  } else {
    divStyle.backgroundColor = "";
  }

  return (
    <div className="">
      <h2 className="my-5">Nutri blog</h2>
      <div className="d-flex justify-content-between">
        <div
          style={divStyle}
          onMouseOver={() => setBlogHoverState(true)}
          onMouseOut={() => setBlogHoverState(false)}
        >
          <div className="d-flex  p-3">
            <div className="me-5">
              <span className="fw-light text-secondary">
                Racheal jones · Nutritionist
              </span>
              <br />
              <span className="fw-bold">
                Eat real food: How to eat a whole food, plant based diet.
              </span>
              <br />
              <span className="fw-light text-secondary">
                Nov 20 · 10 min read
              </span>
              <br />
              {bookmarkState ? (
                <img onClick={handleBookmark} src={bookmarkiconactive} />
              ) : (
                <img onClick={handleBookmark} src={Bookmarkicondefault} />
              )}
            </div>
            <div>
              <img src={nutriblogimage} />
            </div>
          </div>
        </div>
        <div
          style={divStyle}
          onMouseOver={() => setBlogHoverState(true)}
          onMouseOut={() => setBlogHoverState(false)}
        >
          <div className="d-flex  p-3">
            <div className="me-5">
              <span className="fw-light text-secondary">
                Racheal jones · Nutritionist
              </span>
              <br />
              <span className="fw-bold">
                Eat real food: How to eat a whole food, plant based diet.
              </span>
              <br />
              <span className="fw-light text-secondary">
                Nov 20 · 10 min read
              </span>
              <br />
              {bookmarkState ? (
                <img onClick={handleBookmark} src={bookmarkiconactive} />
              ) : (
                <img onClick={handleBookmark} src={Bookmarkicondefault} />
              )}
            </div>
            <div>
              <img src={nutriblogimage} />
            </div>
          </div>
        </div>{" "}
        <div
          style={divStyle}
          onMouseOver={() => setBlogHoverState(true)}
          onMouseOut={() => setBlogHoverState(false)}
        >
          <div className="d-flex  p-3">
            <div className="me-5">
              <span className="fw-light text-secondary">
                Racheal jones · Nutritionist
              </span>
              <br />
              <span className="fw-bold">
                Eat real food: How to eat a whole food, plant based diet.
              </span>
              <br />
              <span className="fw-light text-secondary">
                Nov 20 · 10 min read
              </span>
              <br />
              {bookmarkState ? (
                <img onClick={handleBookmark} src={bookmarkiconactive} />
              ) : (
                <img onClick={handleBookmark} src={Bookmarkicondefault} />
              )}
            </div>
            <div>
              <img src={nutriblogimage} />
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Nutriblogcomponents;
