import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from "firebase";

import UnderMaintenance from "./components/UnderMaintenance";
import Test from "./components/Test";
import FireBaseTest from "./components/FireBaseTest";
import TurkeyDayFun from "./components/TurkeyDayFun";

var config = {
  apiKey: process.env.FIREBASE_apiKey
};

const RouterBoi = () => (
  firebase.initializeApp(config),
  (
    <Router>
      <body>
        {/* <Header /> */}

        <Route exact path="/" component={UnderMaintenance} />
        <Route path="/Test" component={Test} />
        <Route path="/FireBaseTest" component={FireBaseTest} />
        <Route path="/TurkeyDayFun" component={TurkeyDayFun} />
      </body>
    </Router>
  )
);

export default RouterBoi;
