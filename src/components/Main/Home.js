import React, { Component } from "react";
import "./home.css";
import HomeNavBar from "../common/HomeNavBar";
import { MDBContainer, MDBView, MDBMask } from "mdbreact";
import { Link } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <MDBView src="https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
          <MDBMask
            overlay="black-strong"
            className="flex-center flex-column text-white text-center"
          >
            <h2>Looking for Food .. ?? </h2>
            <h5>
              How much awareness do u have about your Health..?That is why we
              are here ..
            </h5>
            <br />
            <p>
              Good health is not something we can buy. However, it can be an
              extremely valuable savings account.{" "}
            </p>
          </MDBMask>
        </MDBView>
        <Link className="btn btn-primary" to="/registeradmin">
          Register As Admin
        </Link>
        <Link className="btn btn-primary" to="/adminlogin">
          Login As Admin
        </Link>
        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </MDBContainer>
        </main>
        <div class="row mt-1">
          <div class="col-md-12">
            <ul class="stepper stepper-vertical">
              <li class="completed">
                <a href="/login">
                  <span class="circle">1</span>
                  <span class="label">Log in First</span>
                </a>
                <div class="step-content grey lighten-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse cupiditate voluptate facere iusto quaerat vitae
                    excepturi, accusantium ut aliquam repellat atque nesciunt
                    nostrum similique. Inventore nostrum ut, nobis porro
                    sapiente.
                  </p>
                </div>
              </li>

              <li class="active">
                <a href="/order">
                  <span class="circle">2</span>
                  <span class="label">Order products</span>
                </a>

                <div class="step-content grey lighten-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse cupiditate voluptate facere iusto quaerat vitae
                    excepturi, accusantium ut aliquam repellat atque nesciunt
                    nostrum similique. Inventore nostrum ut, nobis porro
                    sapiente.
                  </p>
                </div>
              </li>

              <li class="active">
                <a>
                  <span class="circle">3</span>
                  <span class="label">Checkout Order</span>
                </a>
                <div class="step-content grey lighten-3">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse cupiditate voluptate facere iusto quaerat vitae
                    excepturi, accusantium ut aliquam repellat atque nesciunt
                    nostrum similique. Inventore nostrum ut, nobis porro
                    sapiente.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <footer class="page-footer font-small indigo">
          <div class="container text-center text-md-left">
            <div class="row">
              <hr class="clearfix w-100 d-md-none" />

              <div class="col-md-3 mx-auto">
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>

              <hr class="clearfix w-100 d-md-none" />

              <div class="col-md-3 mx-auto">
                <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
