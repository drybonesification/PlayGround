"use client";
import React, { Component } from "react";
import "../../Styles/Christmas2018.scss";

class Christmas2018 extends Component {
  render() {
    return (
      <body
        className="Snow"
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          height: "100vh",
          "font-family": "sans-serif",
          background: "#575757",
        }}
      >
        <div
          className="Christmas2018"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            "background-image": `radial-gradient(
            circle at 50% 18%,
            yellow 3%,
            transparent 3.5%
          ),
          linear-gradient(60deg, #7dae41 8%, transparent 8.5%),
          linear-gradient(-60deg, #79a83f 8%, transparent 8.5%),
          linear-gradient(60deg, #75a33d 10%, transparent 10.5%),
          linear-gradient(-60deg, #719d3b 10%, transparent 10.5%),
          linear-gradient(60deg, #6d9839 12%, transparent 12.5%),
          linear-gradient(-60deg, #699237 12%, transparent 12.5%),
          linear-gradient(80deg, #855726 5%, transparent 5.5%),
          linear-gradient(-80deg, #7f5324 5%, transparent 5.5%)`,
          }}
        />
      </body>
    );
  }
}

export default Christmas2018;
