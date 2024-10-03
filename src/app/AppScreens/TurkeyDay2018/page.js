"use client";
import React, { Component } from "react";
import "../../Styles/TurkeyDay2018.css";

class TurkeyDay2018 extends Component {
  render() {
    return (
      <body
        style={{
          backgroundColor: "#faa14a",
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
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

export default TurkeyDay2018;
