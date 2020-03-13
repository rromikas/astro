import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./styles/style.css";
import { Router, Route, Switch, useLocation } from "react-router-dom";
import history from "./routing/history";
import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard/dashboard";
import CallToAction from "./components/callToAction";
import Commands from "./components/commands";
import Auth from "./components/auth";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <CallToAction></CallToAction>
          <Dashboard></Dashboard>
          <Commands></Commands>
          <Router history={history}>
            <Switch>
              <Route exact path="/auth" component={Auth} />
            </Switch>
          </Router>
        </div>
      </div>
    </Provider>
  );
}

export default App;
