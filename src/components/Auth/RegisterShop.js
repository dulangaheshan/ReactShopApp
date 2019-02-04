import React, { Component } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import _ from "lodash";
import DropZoneField from "../common/dropZoneField";
import { RegisterShopAction } from "../../actions";
import { Col, Card, CardBody } from "mdbreact";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Location from "../common/Location";
import "./Auth.css";

const imageIsRequired = value => (_.isEmpty(value) ? "Required" : undefined);

class RegisterShop extends Component {
  constructor(props) {
    super(props);
    console.log(props, "register shop");

    this.state = {
      lat: 0.0,
      lng: 0.0
    };
    this.updateLocation = this.updateLocation.bind(this);
  }

  state = { imageFile: [], listDataFromchild: null };
  //  myCallback = this.myCallback.bind(this);\

  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input} />
      </div>
    );
  }

  updateLocation() {
    {
      this.state.lat = this.props.coords.coords[0];
      this.state.lng = this.props.coords.coords[1];
    }

    this.props.change("lat", this.state.lat);
    this.props.change("lng", this.state.lng);
  }

  renderError() {
    if (this.props.error) {
      console.log(this.props.error);
      return <div className="form-group has-danger">{this.props.error}</div>;
    }
  }
  handleOnDrop = newImageFile => this.setState({ imageFile: newImageFile });

  resetForm = () => {
    this.setState({ imageFile: "" });
    this.props.reset();
  };

  onSubmit(values) {
    console.log(values);
    this.props.RegisterShopAction(values, () => {
      this.props.history.push("/login");
    });
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <div>
          <p>wait untill progress complete</p>
          <CircularProgress color="secondary" />
        </div>
      );
    }

    return (
      <div>
        <button type="submit" className="btn btn-primary">
          Register Shop
        </button>
        <button
          type="button"
          className="btn btn-primary"
          disabled={this.props.pristine || this.props.submitting}
          onClick={this.resetForm}
          style={{ float: "right" }}
        >
          Clear
        </button>
      </div>
    );
  }

  render() {
    // this.setState({
    //   lat: this.props.coords.coords[0],
    //   lng: this.props.coords.coords[1]
    // });

    console.log(this.props.coords, "render");
    const { handleSubmit } = this.props;
    return (
      <div>
        <div>
          <Card>
            <CardBody>
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <p className="h4 text-center py-4">Register Shop</p>
                <div className="grey-text">
                  <Field
                    label="Shop Name"
                    name="shopname"
                    type="text"
                    component={this.renderField}
                  />
                  <Field
                    label="Describe about your shop"
                    name="description"
                    type="text"
                    component={this.renderField}
                  />

                  <Field
                    label="Email"
                    name="email"
                    type="text"
                    component={this.renderField}
                  />
                  <Field
                    label="Contact No"
                    name="mobileno"
                    type="text"
                    component={this.renderField}
                  />
                  <Field
                    label="Location"
                    name="location"
                    type="text"
                    component={this.renderField}
                  />
                  <label>Lat:</label>
                  <Field
                    name="lat"
                    component="input"
                    type="number"
                    step="0.01"
                    value={this.props.coords.coords[0]}
                  />
                  <label>Lng:</label>
                  <Field
                    name="lng"
                    component="input"
                    type="number"
                    value={this.props.coords.coords[1]}
                    step="0.01"
                  />
                  <div>
                    <Field
                      name="image"
                      component={DropZoneField}
                      type="file"
                      imagefile={this.state.imageFile}
                      handleOnDrop={this.handleOnDrop}
                      validate={[imageIsRequired]}
                    />
                  </div>
                  <div>{this.renderError()}</div>
                  <div>{this.renderButton()}</div>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
        <Location triggerLocation={this.updateLocation} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.location, "wert");
  return {
    error: state.shop.error,
    loading: state.shop.loading,
    coords: state.location
  };
};

export default reduxForm({
  form: "registershop"
})(
  connect(
    mapStateToProps,
    { RegisterShopAction }
  )(withRouter(RegisterShop))
);
