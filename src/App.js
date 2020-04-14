import React from "react";
import "./styles/style.css";
import { Router, Route, Switch } from "react-router-dom";
import history from "./routing/history";
import Navbar from "./components/navbar";
import Auth from "./components/auth";
import { Provider } from "react-redux";
import store from "./store/store";
import Dashboard from "./components/dashboard/dashboard";
// eslint-disable-next-line import/no-webpack-loader-syntax
import file from "!raw-loader!./index.js";
function App() {
  console.log(file);
  return (
    <Provider store={store}>
      <Navbar></Navbar>
      <Dashboard></Dashboard>
      <Router history={history}>
        <Switch>
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
