import React, { Component } from "react";
import "../Styles/UnderMaintenance.css";

class UnderMaintenance extends Component {
  render() {
    return (
      <body
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          height: "100vh",
          "font-family": "sans-serif",
          background: "#000000",
        }}
      >
        <div className="UnderMaintenance">
          <span>Under Maintenance...</span>
        </div>
      </body>
    );
  }
}

export default UnderMaintenance;
