import React from "react";
import axios from "axios";
import {
  Card,
  Container,
  Row,
  Col,
  Table,
  Badge,
  Button,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { BadgeColor } from "./Home";

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA: [],
      SEARCH_DATA: [],
    };
    this.search = this.search.bind(this);
    this.fetchStudents = this.fetchStudents.bind(this);
  }

  componentDidMount() {
    this.fetchStudents();
  }

  fetchStudents() {
    var self = this;
    axios.get("http://localhost:5000/api/students/getall").then((res) => {
      self.setState({ DATA: res.data, SEARCH_DATA: res.data });
    });
  }

  search(text) {
    let temp = [];
    text = text.toLowerCase();
    this.state.DATA.forEach((element) => {
      if (element.name.toLowerCase().includes(text)) temp.push(element);
    });
    this.setState({ SEARCH_DATA: temp });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Row>
                  <Col className="d-flex align-items-center">Students</Col>
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
                  </Col>
                </Row>
              </Card.Header>
              <Table hover size="sm" responsive className="myTable mb-0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Registration</th>
                    <th className="center-text">Available</th>
                    <th className="center-text">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.SEARCH_DATA.map((item) => (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.regNo}</td>
                      <td className="center-text">
                        <Badge variant={BadgeColor[item.available]}>
                          {item.available ? "YES" : "NO"}
                        </Badge>
                      </td>
                      <td className="center-text">
                        {item.available ? (
                          <Badge
                            as={Button}
                            variant={"light"}
                            style={{ border: "none" }}
                          >
                            invite
                          </Badge>
                        ) : (
                          <></>
                        )}
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

export default Students;
