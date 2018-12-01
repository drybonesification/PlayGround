import React, { Component } from "react";
import "./TurkeyDayFun.css";

class TurkeyDayFun extends Component {
  render() {
    return (
      <body
        style={{
          "background-color": "#faa14a",
          margin: 0,
          padding: 0,
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          height: "100vh"
        }}
      >
        <div class="turkey">
          <span class="feather" />
          <span class="feather" />
          <span class="feather" />
          <span class="feather" />
          <span class="feather" />
          <span class="feather" />
          <span class="feather" />
          <span class="feather" />
          <span class="feather" />
          <span class="feather" />
          <span class="feather" />
          <span class="feather" />
          <span class="feather" />
          <span class="feather" />
          <div class="head">
            <div class="eye eye-left" />
            <div class="eye eye-right" />
            <div class="beak" />
          </div>
          <div class="turkey-body" />
        </div>
      </body>
    );
  }
}

export default TurkeyDayFun;
