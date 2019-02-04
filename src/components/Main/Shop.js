import React, { Component } from "react";
import { fetchFoods } from "../../actions";
import { connect } from "react-redux";
import ToggleDisplay from "react-toggle-display";
import _ from "lodash";
import AddFoodItem from "./AddFoodItem";
import NavbarPage from "../common/NavbarPage";
import FlipCard from "../common/FlipCard";
import "./home.css";
import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Col
} from "mdbreact";

class Shop extends Component {
  constructor() {
    super();
    this.state = { show: true };
  }
  state = {};
  componentDidMount() {
    this.props.fetchFoods();
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  renderFoodItems() {
    console.log(this.props, "sdfghjk");
    return _.map(this.props.foodItems, data => {
      return (
        <div className="column" key={data.FoodItemId}>
          {/* <Card
              className="text-center h-100 w-100"
              style={{ maxWidth: "22rem" }}
            >
              <CardTitle> {data.ShopName} </CardTitle>
              <CardImage className="img-fluid" src={data.url} waves />
              <CardBody />
            </div> */}

          <FlipCard
            className="row"
            name={data.FoodName}
            img={data.url}
            description={data.Description}
          />
        </div>
        // <Card>
        // <li className="list-group-item" key={foodItems.FoodItemId}>
        //   <img
        //     src={foodItems.url}
        //     alt="food item image"
        //     height="100px"
        //     width="100px"
        //   />
        //   {foodItems.FoodName}
        // </li>
        // </Card>
      );
    });
  }

  renderUserInfo() {
    var token = localStorage.getItem("token");
    var jwtDecode = require("jwt-decode");
    var decoded = jwtDecode(token);
    console.log(decoded);
    return (
      <div>
        <h3 className="list-group">Food Items</h3>
        <ul>{this.renderFoodItems()}</ul>
      </div>
    );
  }

  render() {
    //console.log(this.props.foodItems);
    //console.log(this.props.auth, "ijuno");
    return (
      <div>
        <NavbarPage />
        <ToggleDisplay show={this.state.show}>
          <div>{this.renderUserInfo()}</div>
        </ToggleDisplay>
        <button className="btn btn-primary" onClick={() => this.handleClick()}>
          {this.state.show ? "Add Food Item" : "cancle"}
        </button>
        <ToggleDisplay hide={this.state.show} tag="section">
          <AddFoodItem />
        </ToggleDisplay>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.foodItems, "sdfghjkl;");
  return {
    foodItems: state.foodItems,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  { fetchFoods }
)(Shop);
