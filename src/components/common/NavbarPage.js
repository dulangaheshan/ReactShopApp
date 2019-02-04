import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import LogoutAction from "../../actions/AuthActions";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Fa
} from "mdbreact";

class NavbarPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props, "dtf");
    this.logout = this.logout.bind(this);
  }

  state = {
    collapseID: ""
  };

  logout() {
    console.log(this.props, "dtf");
    //this.props.history.push("/shop");
    //console.log("ghhj");
    localStorage.clear();

    this.props.history.push("/login");
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    var token = localStorage.getItem("token");
    var jwtDecode = require("jwt-decode");
    var decoded = jwtDecode(token);

    //console.log(decoded);
    return (
      <div>
        <Navbar color="red" dark expand="md">
          <NavbarBrand>
            <strong className="white-text">{decoded.actort}</strong>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
          <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to="#!">{decoded.amr}</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <NavLink
                  className="waves-effect waves-light d-flex align-items-center"
                  to="#!"
                >
                  1<Fa icon="envelope" className="ml-1" />
                </NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle className="dopdown-toggle" nav>
                    <img
                      src={decoded.acr}
                      className="rounded-circle z-depth-0"
                      style={{ height: "60px", padding: 0 }}
                      alt="shop logo"
                    />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-default" right>
                    <DropdownItem href="#!">My account</DropdownItem>
                    <DropdownItem onClick={this.logout}>Log out</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log(state);
  return {
    auth: state.auth
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { LogoutAction }
  )(NavbarPage)
);
