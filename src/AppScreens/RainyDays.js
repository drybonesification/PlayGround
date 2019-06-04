import React, { Component } from "react";
import "../Styles/RainyDays.scss";

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
              "justify-content": "center",
              "align-items": "center",
              height: "100vh",
              "font-family": "sans-serif",
              background: "#575757"
            }}
          />
        </div>
      </body>
    );
  }
}

//WIP

export default RainyDays;
