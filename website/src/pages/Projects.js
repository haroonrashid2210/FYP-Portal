import React from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Table,
  Badge,
  Button,
  Dropdown,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA: [
        {
          project: "A System for Dengue Surveillance",
          leader: "Wahb ur Rehman",
          supervisor: "Not available",
        },
        {
          project: "Android App Maker",
          leader: "Aimen Javed",
          supervisor: "Not available",
        },
        {
          project: "Angle's EYE",
          leader: "Muhammad Usama",
          supervisor: "Not available",
        },
      ],
      SEARCH_DATA: [],
    };
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.setState({ SEARCH_DATA: this.state.DATA });
  }

  search(text) {
    let temp = [];
    text = text.toLowerCase();
    this.state.DATA.forEach((element) => {
      if (
        element.project.toLowerCase().includes(text) ||
        element.leader.toLowerCase().includes(text) ||
        element.supervisor.toLowerCase().includes(text)
      )
        temp.push(element);
    });
    this.setState({ SEARCH_DATA: temp });
  }

  render() {
    return (
      <Container fluid>
        <Row className="mb-5">
          <Col>
            <Card>
              <Card.Header>
                <Row>
                  <Col className="d-flex align-items-center">My Project</Col>
                  <Col className="d-flex justify-content-end">
                    <Button
                      as={Link}
                      variant="outline-secondary"
                      size="sm"
                      to="/projectrequests"
                    >
                      Project Requests
                    </Button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Card.Title>You are not in any project</Card.Title>
                <Card.Text>
                  Make a new project or request to join a project.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Row>
                  <Col className="d-flex align-items-center">All Projects</Col>
                  <Col className="d-flex justify-content-end">
                    <InputGroup size="sm" className="w-50 mr-2">
                      <FormControl
                        placeholder="Search"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(e) => this.search(e.target.value)}
                      />
                      <InputGroup.Append>
                        <Button variant="outline-secondary">
                          <span>
                            <i className="fa fa-search" />
                          </span>
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                    <Button
                      as={Link}
                      variant="outline-secondary"
                      size="sm"
                      to="/createproject"
                    >
                      New
                    </Button>
                  </Col>
                </Row>
              </Card.Header>
              <Table hover size="sm" responsive className="myTable mb-0">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Group leader</th>
                    <th>Supervisor</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.SEARCH_DATA.map((item) => (
                    <tr>
                      <td>{item.project}</td>
                      <td>{item.leader}</td>
                      <td>{item.supervisor}</td>
                      <td>
                        <a href="">Join</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;
