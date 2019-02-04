import React, { Component } from "react";
import "./home.css";
import HomeNavBar from "../common/HomeNavBar";

import HomeFooter from "../common/Footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <HomeNavBar />
        <HomeFooter />
      </div>
    );
  }
}

export default Home;
