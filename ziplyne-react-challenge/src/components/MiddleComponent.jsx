import React from "react";
import "./styles/MiddleComponent.css";

function MiddleComponent() {
  return (
    <div className="middleComponent">
      <defs>
        <linearGradient id="linearGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop style={{ offSet: "0%", stopColor: "#7369c0" }} />
          <stop style={{ offSet: "100%", stopColor: "#6f39e1" }} />
        </linearGradient>
      </defs>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="url(#linearGradient)"
          fill-opacity="0.9"
          d="M0,256L34.3,234.7C68.6,213,137,171,206,154.7C274.3,139,343,149,411,144C480,139,549,117,617,112C685.7,107,754,117,823,133.3C891.4,149,960,171,1029,176C1097.1,181,1166,171,1234,170.7C1302.9,171,1371,181,1406,186.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <div id="containerForHeader">
        <h1 className="mainHeader">
          Lorem ipsum dolor sit amet <br />
          consectetur adipisicing elit.
        </h1>
      </div>
    </div>
  );
}

export default MiddleComponent;
