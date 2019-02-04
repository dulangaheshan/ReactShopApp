import React from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import ForgotPassword from "./components/Auth/ForgotPassword";

import thunk from "redux-thunk";
import promise from "redux-promise";

import reducers from "./reducers";

import Home from "./components/Main/Home";

import Shop from "./components/Main/Shop";

const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/shop" component={Shop} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
