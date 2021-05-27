import React from "react";
import { Navbar, Nav, Overlay } from "react-bootstrap";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, notification: false };

    // Binding
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen,
      notification: !this.state.notification,
    });
  }

  render() {
    const isOpen = this.state.isOpen;
    const notification = this.state.notification;

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">FYP Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            {/* <Nav.Link href="#deets">
              <span className="btn-inner--icon">
                <i
                  className={
                    (notification ? "fa fa-bell blink" : "fa fa-bell") +
                    " d-none d-lg-inline"
                  }
                />
              </span>
              <span class="d-sm-inline d-md-none">Notifications</span>
            </Nav.Link> */}
            <Nav.Link eventKey={2} href="" onClick={this.toggleOpen}>
              Haroon Rashid
            </Nav.Link>
            <Nav.Link href="#deets">
              <span className="btn-inner--icon">
                <i className={"fa fa-power-off d-none d-lg-inline"} />
              </span>
              <span class="d-sm-inline d-md-none">Logout</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
