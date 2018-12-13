import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from "firebase";

import UnderMaintenance from "./AppScreens/UnderMaintenance";
import Test from "./AppScreens/Test";
import UserScreen from "./AppScreens/UserScreen";
import TurkeyDayFun from "./AppScreens/TurkeyDayFun";
import Home from "./AppScreens/Home";
require("dotenv").config();

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
  projectId: process.env.REACT_APP_FIREBASE_projectId,
  storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId
};
firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

const RouterBoi = () => (
  <Router>
    <div>
      {/* <Header /> */}
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/" component={UnderMaintenance} />
      <Route path="/Test" component={Test} />
      <Route path="/UserScreen" component={UserScreen} />
      <Route path="/TurkeyDayFun" component={TurkeyDayFun} />
    </div>
  </Router>
);

export default RouterBoi;
