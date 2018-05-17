import React, { Component } from "react";
import "./App.css";
import HandInput from "./containers/HandInputCont";
import LastHand from "./containers/LastHandCont";

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <h1>Poker App</h1>
        <HandInput />
        <LastHand />
      </div>
    );
  }
}
export default (App);
