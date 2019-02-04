import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import _ from "lodash";
import dropZoneField from "../common/dropZoneField";
import { connect } from "react-redux";
import { AddFoodItemAction } from "../../actions";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withRouter } from "react-router-dom";
import { Card, CardBody, Container } from "mdbreact";

//import "../../../node_modules/react-select/dist/react-select";

const imageIsRequired = value => (_.isEmpty(value) ? "Required" : undefined);

class AddFoodItem extends Component {
  state = { imageFile: [] };

  handleOnDrop = newImageFile => this.setState({ imageFile: newImageFile });

  onSubmit(values) {
    //console.log(values);
    this.props.AddFoodItemAction(values, () => {
      this.props.history.push("/shop");
    });
  }

  renderError() {
    if (this.props.error) {
      console.log(this.props.error);
      return <div className="form-group has-danger">{this.props.error}</div>;
    }
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
          Add Food Item
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
    //const { selectedOption } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div>
        <Container>
          <Card>
            <CardBody>
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <p className="h4 text-center py-4">Add Food Item</p>

                <div>
                  <label>Type of Your Food Item</label>
                  <div>
                    <Field
                      className="form-control"
                      name="fooditemtype"
                      component="select"
                    >
                      <option />
                      <option value="IsVegi">Vegi</option>
                      <option value="IsNonVegi">Non-Vegi</option>
                      <option value="IsRice">Rice</option>
                      <option value="IsBeverage">Beverage</option>
                    </Field>
                  </div>
                </div>
                <label>Food Item Name</label>
                <div>
                  <Field
                    className="form-control"
                    name="fooditemname"
                    component="input"
                    type="text"
                    placeholder="Food Item Name"
                  />
                </div>
                <label>Describe About Food Item</label>
                <div>
                  <Field
                    className="form-control"
                    name="description"
                    component="textarea"
                    placeholder="Tell Some Intersting things to customers about this food item"
                  />
                </div>

                <div>
                  <label>Avaliable Time</label>
                  <div>
                    <Field
                      className="form-control"
                      name="avaliabletime"
                      component="select"
                    >
                      <option />
                      <option value="IsBreakfast">Breakfast</option>
                      <option value="IsLunch">Lunch</option>
                      <option value="IsDinner">Dinner</option>
                    </Field>
                  </div>
                </div>

                <div>
                  <label>Avaliable</label>
                  <div>
                    <label>
                      <Field
                        className="form-control"
                        name="available"
                        component="input"
                        type="radio"
                        value="available"
                      />{" "}
                      YES
                    </label>

                    <label>
                      <Field
                        className="form-control"
                        name="available"
                        component="input"
                        type="radio"
                        value="notavailable"
                      />{" "}
                      NO
                    </label>
                  </div>
                </div>

                <label>Small Unit Price</label>
                <div>
                  <Field
                    className="form-control"
                    name="smallUnitPrice"
                    component="input"
                    type="text"
                    placeholder="price of Small Unit"
                  />
                </div>

                <label>Medium Unit Price</label>
                <div>
                  <Field
                    className="form-control"
                    name="mediumUnitPrice"
                    component="input"
                    type="text"
                    placeholder="price of Medium Unit"
                  />
                </div>

                <label>Large Unit Price</label>
                <div>
                  <Field
                    className="form-control"
                    name="largeUnitPrice"
                    component="input"
                    type="text"
                    placeholder="price of Large Unit"
                  />
                </div>

                <Field
                  className="form-control"
                  name="image"
                  component={dropZoneField}
                  type="file"
                  imagefile={this.state.imageFile}
                  handleOnDrop={this.handleOnDrop.bind(this)}
                  validate={[imageIsRequired]}
                />
                <div>
                  <div>{this.renderError()}</div>
                  <div>{this.renderButton()}</div>
                </div>
              </form>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    error: state.foodItems.error,
    loading: state.foodItems.loading
  };
};

export default reduxForm({
  form: "addfooditem"
})(
  connect(
    mapStateToProps,
    { AddFoodItemAction }
  )(withRouter(AddFoodItem))
);
