import React from "react";
import "./styles/style.css";
import { Router, Route, Switch } from "react-router-dom";
import history from "./routing/history";
import Navbar from "./components/navbar";
import Auth from "./components/auth";
import { Provider } from "react-redux";
import store from "./store/store";
import Dashboard from "./components/dashboard/dashboard";
function App() {
  return (
    <Provider store={store}>
      <Navbar></Navbar>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
