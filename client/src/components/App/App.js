import React from "react";
import {ToastProvider} from "react-toast-notifications";

import Header from "../Header";
import Footer from "../Footer";

import RouteView from "../../routes";

import "./App.css";

const App = () => (
  <ToastProvider>
    <div className="App" data-test="AppComp">
      <Header />
      <RouteView />
      <Footer />
    </div>
  </ToastProvider>
);

export default App;
