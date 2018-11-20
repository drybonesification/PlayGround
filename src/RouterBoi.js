import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import UnderMaintenance from "./components/UnderMaintenance";
import Test from "./components/Test";

const RouterBoi = () => (
  <Router>
    <div>
      {/* <Header /> */}

      <Route exact path="/" component={UnderMaintenance} />
      <Route path="/Test" component={Test} />
    </div>
  </Router>
);
// const Header = () => (
//   <ul>
//     <li>
//       <Link to="/">Home</Link>
//     </li>
//     <li>
//       <Link to="/about">About</Link>
//     </li>
//     <li>
//       <Link to="/topics">Topics</Link>
//     </li>
//   </ul>
// );

export default RouterBoi;
