import React from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import CustomerLogin from "./components/Auth/CustomerLogin";

import thunk from "redux-thunk";
import promise from "redux-promise";

import reducers from "./reducers";

import Home from "./components/Main/Home";

import RegisterAdmin from "./components/Auth/RegisterAdmin";
import AdminLogin from "./components/Auth/AdminLogin";
import AdminMain from "./components/Main/Admin/Main";
import HomeNavBar from "./components/common/HomeNavBar";

const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <HomeNavBar />
        <br /> <br /> <br /> <br /> <br />
        <Switch>
          <Route path="/adminmain" component={AdminMain} />
          <Route path="/adminlogin" component={AdminLogin} />
          <Route path="/registeradmin" component={RegisterAdmin} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
