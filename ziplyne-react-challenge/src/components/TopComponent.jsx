import React from "react";
import NavigationBar from "./NavigationBar";
import MiddleComponent from "./MiddleComponent";
import "./styles/TopComponent.css";

function TopComponent() {
  return (
    <div className="topComponent">
      <NavigationBar />
      <MiddleComponent />
    </div>
  );
}

export default TopComponent;
