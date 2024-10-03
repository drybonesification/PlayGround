"use client";

import React, { Component } from "react";

class Encoder extends Component {
  state = {
    Pre_Encode: "",
    Post_Encode: "Endcoded text will be here",
  };
  ConsoleBoi = () => {
    console.log(this.state);
  };

  handleinput = (event) => {
    const targetName = event.target.name;
    this.setState({
      [targetName]: event.target.value,
    });
  };

  HandleEncode = () => {
    var Encoding = [];
    Encoding.push(this.state.Pre_Encode.split(""));
    //Encoding.forEach(this.ChangeChar);
  };

  ChangeChar = (item, index) => {
    console.log(index);
  };

  ResetEncoding = () => {
    //for each to reset using encoding.pop
  };

  render() {
    const { Pre_Encode, Post_Encode } = this.state;
    return (
      <div>
        <input
          type="text"
          name="Pre_Encode"
          value={Pre_Encode}
          onChange={this.handleinput}
        />
        <button type="button" onClick={this.ConsoleBoi}>
          Console log
        </button>
        <button type="button" onClick={this.HandleEncode}>
          Test Encoder
        </button>
        <p>{Post_Encode}</p>
      </div>
    );
  }
}

export default Encoder;
