import "../CSS/Page1.css";
import React from "react";
import Button from "./Button";

function Page1() {
  return (
    <div>
      <div className="Container">
        <div className="textArea">
          <h1>A messenger that is </h1>
          <h1> &nbsp; ahead of its time</h1>
          <p>
            Try the new Move messenger it will definitely impress you with its
            amazing features
          </p>
          <p>
            that will make it easier for you to communicate between your friends
          </p>
          <div className="buttonArea">
            <Button></Button>
            <Button></Button>
          </div>
        </div>
      </div>
      <div className="imageArea">
        <img
          src="./images/page1_image1.png"
          alt="image1"
          style={{
            height: "615px",
            position: "absolute",
            left: "0%",
          }}
        />
        <img
          src="./images/page1_image2.png"
          alt="image2"
          style={{
            height: "615px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: "100",
          }}
        ></img>
        <img
          src="./images/page1_image11.png"
          alt="image11"
          style={{
            height: "615px",
            position: "absolute",
            right: "0%",
          }}
        ></img>
      </div>
    </div>
  );
}

export default Page1;
