import React from "react";
import "./styles/NavigationBar.css";

function NavigationBar() {
  return (
    <div className="navigationBar">
      <div className="leftPart">
        <a href="#asds">
          <img
            src={require("../styleElements/WithDropShadow.png")}
            alt="Ziplyne logo"
            width="100px"
            height="35px"
          />
        </a>
      </div>
      <div className="middlePart">
        <p className="middleButton">Product</p>
        <p className="middleButton">Solution</p>
        <p className="middleButton">Pricing</p>
        <p className="middleButton">Customer Stories</p>
        <p className="middleButton">Resources</p>
      </div>
      <div className="rightPart">
        <button className="rightButton">Request A Demo</button>
        <button id="arrowButton">
          <img
            src={require("../styleElements/rightArrow.jpg")}
            alt="arrow poinging right"
          />
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
