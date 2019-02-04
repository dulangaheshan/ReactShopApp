import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Input, Button, Card, CardBody } from "mdbreact";
import { RegisterOwnerAction } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class RegisterAdmin extends Component {
  state = {};

  renderField(field) {
    const className = `form-group ${
      field.meta.touched && field.meta.error ? "has-danger" : ""
    }`;
    return (
      <div className={className}>
        <Input
          label={field.label}
          className="form-control"
          type={field.type}
          {...field.input}
        />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    // console.log(values);
    this.props.RegisterOwnerAction(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Card>
        <CardBody>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <p className="h4 text-center py-4">Register as Shop Owner</p>
            <div className="grey-text">
              <Field
                label="First Name"
                name="firstname"
                type="text"
                component={this.renderField}
              />
              <Field
                label="Last Name"
                name="lastname"
                type="text"
                component={this.renderField}
              />
              <Field
                label="Contact Number"
                name="contactnumber"
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
                label="Password"
                name="pass_word"
                type="password"
                component={this.renderField}
              />
              <Button type="submit" color="danger">
                Register
              </Button>
            </div>
          </form>
          <Link to="/login" className="btn btn-danger">
            Already a member Login Here..
          </Link>
        </CardBody>
      </Card>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.firstname) {
    errors.firstname = "Cannot Be Empty!";
  }
  if (!values.lastname) {
    errors.lastname = "Cannot Be Empty!";
  }
  if (!values.contactnumber) {
    errors.contactnumber = "Cannot Be Empty!";
  }

  if (!values.email) {
    errors.email = "Cannot Be Empty!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.pass_word) {
    errors.pass_word = "Cannot Be Empty!";
  }
  if (!values.repeatpassword) {
    if (values.pass_word != values.repeatpassword) {
      errors.repeatpassword = "password does not match";
    }
    errors.repeatpassword = "Cannot Be Empty!";
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
  form: "registeradmin"
})(
  connect(
    mapStateToProps,
    { RegisterOwnerAction }
  )(RegisterAdmin)
);
