import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Container, Col, Card, CardBody } from "mdbreact";
import { LoginAction } from "../../actions";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

class AdminLogin extends Component {
  renderField(field) {
    const className = `form-group ${
      field.meta.touched && field.meta.error ? "has-danger" : ""
    }`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input} />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
    this.props.LoginAction(values, () => {
      this.props.history.push("/shop");
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Container>
        <Col md="4">
          <Card>
            <CardBody>
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <p className="h4 text-center py-4">Log In</p>

                <div className="grey-text">
                  <Field
                    label="Email"
                    name="email"
                    type="text"
                    component={this.renderField}
                  />
                  <Field
                    label="Password"
                    name="password"
                    type="password"
                    component={this.renderField}
                  />
                  <button
                    type="submit"
                    className="btn btn-pink btn-block btn-rounded z-depth-1"
                  >
                    Login
                  </button>
                </div>
              </form>
              <Link to="/forgotpassword">Forgot Password</Link>
              <br />
              <Link to="/">Dont Have Account Register Here</Link>
            </CardBody>
          </Card>
        </Col>
      </Container>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = "Cannot Be Empty!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Cannot Be Empty!";
  }

  return errors;
}

const mapStateToProps = state => {
  console.log(state);
  return {
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default reduxForm({
  validate,
  form: "adminlogin"
})(
  connect(
    mapStateToProps,
    { LoginAction }
  )(AdminLogin)
);
