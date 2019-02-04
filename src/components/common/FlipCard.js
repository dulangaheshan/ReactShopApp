import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";

import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Row,
  Col,
  Fa
} from "mdbreact";
import "./common.css";
import EditFoodItem from "../Main/EditFoodItem";

class FlipCard extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    console.log(this.props, "fg");
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <Card
          wide
          key="front"
          className="text-center h-100 w-100"
          style={{ maxWidth: "15rem" }}
        >
          <CardImage cascade className="image" src={this.props.img} waves />

          <Button
            onClick={this.handleClick}
            floating
            className="ml-auto mr-4 lighten-3 mdb-coalor"
            action
          >
            <Fa icon="chevron-right" />
          </Button>

          <CardBody cascade>
            <CardTitle> {this.props.name} </CardTitle>
          </CardBody>
        </Card>

        <Card
          key="back"
          className="text-center h-100 w-100"
          style={{ maxWidth: "15rem" }}
        >
          <EditFoodItem />
          <Button
            onClick={this.handleClick}
            floating
            className="ml-auto mr-4 lighten-3 mdb-coalor"
            action
          >
            <Fa icon="chevron-left" />
          </Button>
        </Card>
      </ReactCardFlip>
    );
  }
}

export default FlipCard;
