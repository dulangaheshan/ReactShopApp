import React, { Component } from "react";
import RegisterOwner from "../Auth/RegisterOwner";
import RegisterShop from "../Auth/RegisterShop";
import { connect } from "react-redux";
import { Container, Row, Col, Input, Button } from "mdbreact";
import { Animation } from "mdbreact";
import CarouselPage from "../common/CarouselPage";
import "./home.css";
import HomeNavBar from "../common/HomeNavBar";

import HomeFooter from "../common/Footer";

class Home extends Component {
  renderField() {
    if (this.props.user) {
      return (
        <div className="sticky-top">
          <Animation type="slideInUp" duration="5s">
            <Container className="cont">
              <Col md="4">
                <div>
                  <RegisterShop />
                </div>
              </Col>
            </Container>
          </Animation>
        </div>
      );
    }
    return (
      <div className="sticky-top">
        <Animation type="slideInUp" duration="5s">
          <Container className="cont">
            <Col md="4">
              <div>
                <RegisterOwner />
              </div>
            </Col>
          </Container>
        </Animation>
      </div>
    );
  }

  state = {};
  render() {
    return (
      <div>
        <HomeNavBar />

        <CarouselPage className="corosal" />
        <div className="renderfield">{this.renderField()}</div>
        <HomeFooter />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Home);
