import React from "react";
import "./styles/style.css";
import { Router, Route, Switch } from "react-router-dom";
import history from "./routing/history";
import Navbar from "./components/navbar";
import Auth from "./auth/auth.jsx";
import { Provider } from "react-redux";
import store from "./store/store";
import Dashboard from "./components/dashboard/dashboard";
import Landing from "./components/landing/landing";
import Servers from "./components/servers";

function App() {
  return (
    <Provider store={store}>
      <Navbar></Navbar>
      <Router history={history}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/servers" component={Servers}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
