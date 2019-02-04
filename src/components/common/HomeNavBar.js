import React from "react";
import "./homeNavBar.css";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  FormInline,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Animation
} from "mdbreact";

class HomeNavBar extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <Container>
        <Navbar
          className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar"
          color="red"
        >
          <Animation type="bounce" duration="5s">
            <NavbarBrand>
              <strong className="white-text">Handallo</strong>
            </NavbarBrand>
          </Animation>
          {/* <NavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} /> */}
        </Navbar>
      </Container>
    );
  }
}

export default HomeNavBar;
