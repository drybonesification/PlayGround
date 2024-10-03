"use client";

import React, { Component } from "react";
import "../../Styles/RainyDays.scss";

class RainyDays extends Component {
  render() {
    return (
      <body className="Clouds">
        <div className="Thunder">
          <div
            className="Rain"
            style={{
              margin: 0,
              padding: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              fontFamily: "sans-serif",
              background: "#575757",
            }}
          />
        </div>
      </body>
    );
  }
}

export default RainyDays;
