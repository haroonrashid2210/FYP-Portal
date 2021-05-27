import React from "react";
import { Nav, NavLink, NavItem } from "react-bootstrap";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";

const ITEMS = [
  { name: "Home", path: "/home" },
  { name: "Projects", path: "/projects" },
  { name: "Students", path: "/students" },
  { name: "Supervisors", path: "/supervisors" },
  { name: "Profile", path: "/profile" },
];

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Nav
          variant="pills"
          defaultActiveKey={0}
          className="flex-column"
          bsPrefix={"mySidebar"}
        >
          {ITEMS.map((item, key) => (
            <NavLink eventKey={key} to={item.path} as={Link}>
              {item.name}
            </NavLink>
          ))}
        </Nav>
      </div>
    );
  }
}

export default Sidebar;
