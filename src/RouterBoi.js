import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from "firebase";

// import Header from "./AppScreens/components/Header";
import UnderMaintenance from "./AppScreens/UnderMaintenance";
import Test from "./AppScreens/Test";
import LoginAndRegister from "./AppScreens/LoginAndRegister";
import TurkeyDay2018 from "./AppScreens/TurkeyDay2018";
import Christmas2018 from "./AppScreens/Christmas2018";
import Home from "./AppScreens/Home";
import RainyDays from "./AppScreens/RainyDays";
import Encoder from "./AppScreens/Encoder";
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
      <Route path="/LoginAndRegister" component={LoginAndRegister} />
      <Route path="/TurkeyDay2018" component={TurkeyDay2018} />
      <Route path="/Christmas2018" component={Christmas2018} />
      <Route path="/RainyDays" component={RainyDays} />
      <Route path="/Encoder" component={Encoder} />
    </div>
  </Router>
);

export default RouterBoi;
