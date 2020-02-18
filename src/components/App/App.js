import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "../../state/store";

import Header from "../Header/Header";
import Routes from "./Routes";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes />
        <div style={{ height: "4000px", background: "red" }}></div>
      </Router>
    </Provider>
  );
}

export default App;
