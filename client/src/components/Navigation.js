import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Dad Jokes</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Register/" onClick={this.toggle}>Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Login/" onClick={this.toggle}>Sign In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Jokes/" onClick={this.toggle}>Jokes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Logout/">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}