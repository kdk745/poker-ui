import React, { Component } from "react";
import "./App.css";
import HandInput from "./containers/HandInputCont";
import LastHand from "./containers/LastHandCont";
import Home from "./containers/HomeCont";
import Callback from "./containers/CallbackCont";
import {
  Router,
  Route
} from "react-router-dom";
import history from "./history";
class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }

  app() {
    return (
      <div>
        <HandInput />
        <LastHand />
      </div>
    );
  }

  render() {
    return (
      <div id={"app"}>
        <h1>Poker App</h1>
        <Router history={history}>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/callback" component={Callback} />
            <Route path="/app" component={this.app} />
          </div>
        </Router>
      </div>
    );
  }
}

export default (App);
