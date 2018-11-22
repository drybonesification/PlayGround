import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import firebase from "firebase";
import {
  FIREBASE_apiKey,
  FIREBASE_authDomain,
  FIREBASE_databaseURL,
  FIREBASE_projectId,
  FIREBASE_storageBucket,
  FIREBASE_messagingSenderId
} from "dotenv";

import UnderMaintenance from "./components/UnderMaintenance";
import Test from "./components/Test";
import FireBaseTest from "./components/FireBaseTest";
import TurkeyDayFun from "./components/TurkeyDayFun";

const config = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: process.env.FIREBASE_authDomain,
  databaseURL: process.env.FIREBASE_databaseURL,
  projectId: process.env.FIREBASE_projectId,
  storageBucket: process.env.FIREBASE_storageBucket,
  messagingSenderId: process.env.FIREBASE_messagingSenderId
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
