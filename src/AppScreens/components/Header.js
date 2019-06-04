import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  Gohome = () => {
    console.log("test");
  };
  render() {
    return (
      <ul class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav class="f6 fw6 ttu tracked">
          <li class="link dim white dib mr3" title="Home">
            <Link to="/">Home</Link>
          </li>
          <li class="link dim white dib mr3" href="#" title="About">
            About
          </li>
          <li class="link dim white dib mr3" href="#" title="Store">
            Store
          </li>
          <li class="link dim white dib" href="#" title="Contact">
            Contact
          </li>
        </nav>
      </ul>
    );
  }
}

//Basic nav system WIP

export default Header;
