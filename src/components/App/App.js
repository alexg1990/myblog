import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "../../state/store";

import Header from "../Header/Header";
import Routes from "./Routes";
import Footer from "../Footer/Footer.js";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes />
      </Router>
      <hr style={{ marginTop: "120px" }} />
      <Footer />
    </Provider>
  );
}

export default App;
