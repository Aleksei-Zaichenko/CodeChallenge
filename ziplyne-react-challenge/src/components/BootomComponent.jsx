import React from "react";
import "./styles/BottomComponent.css";
import computerImage from "../styleElements/UntitledDesign.png";
import diamondImage from "../styleElements/Diamond.png";

function BootomComponent() {
  return (
    <div className="bootomComponent">
      <div className="imagesContainer">
        <div className="paragraphAndComputer">
          <div style={{ width: "100%" }}>
            <h1 className="bottomMainHeader">
              Lorem ipsum dolor sit amet <br />
              consectetur adipisicing elit.
            </h1>
          </div>
          <div
            style={{
              position: "relative",
              left: "-17%",
            }}
          >
            <img src={computerImage} width="140%" alt="computer" />
          </div>
        </div>

        <div id="bottomParagraphAndIamge">
          <img src={diamondImage} width="100%" alt="Purple Diamond" />
          <p id="bottomParagraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            beatae adipisci qui eligendi quo voluptate quaerat commodi,
            reiciendis dicta obcaecati assumenda dolorum, rerum facere incidunt
            voluptatum non similique numquam temporibus!
          </p>
          <p id="secondBottomParagraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            beatae adipisci qui eligendi quo voluptate quaerat commodi,
            reiciendis dicta obcaecati assumenda dolorum, rerum facere incidunt
            voluptatum non similique numquam temporibus!
          </p>
        </div>
      </div>
      {/*ImageContainer*/}
      <div id="emptyContainer"></div>
    </div>
  );
}

export default BootomComponent;
