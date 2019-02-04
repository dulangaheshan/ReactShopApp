import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./Auth/Login";
import Home from "./Home";
import Signup from "./Sign up";
import Checkout from "./Checkout";
import Order from "./Order";
import Payment from "./Payment";
import Additem from "./Additem";
import LoginAdmin from "./Auth/LoginAdmin";
import Cat from "./Cat";
import AdminProfile from "./AdminProfile";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div>
          <Nav />

          <Router>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/order" component={Cat} />
              <Route path="/items" component={Order} />
              <Route path="/payment" component={Payment} />
              <Route path="/additem" component={Additem} />
              <Route path="/loginadmin" component={LoginAdmin} />
              <Route path="/adminprofile" component={AdminProfile} />
              <Route path="/" component={Home} exact />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
