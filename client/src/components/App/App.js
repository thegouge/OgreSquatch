import React from "react";

import Header from "../Header";
import Footer from "../Footer";

import RouteView from "../../routes";

import "./App.css";

const App = () => (
  <div className="App" data-test="AppComp">
    <Header />
    <RouteView />
    <Footer />
  </div>
);

export default App;
