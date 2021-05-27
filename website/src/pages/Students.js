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
import { BadgeColor } from "./Home";

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA: [
        {
          name: "Wahb ur Rehman",
          available: "YES",
        },
        {
          name: "Android App Maker",
          available: "NO",
        },
        {
          name: "Ahmed Ali",
          available: "YES",
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
        element.name.toLowerCase().includes(text) ||
        element.available.toLowerCase().includes(text)
      )
        temp.push(element);
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
                    <th className="center-text">Available</th>
                    <th className="center-text">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.SEARCH_DATA.map((item) => (
                    <tr>
                      <td>{item.name}</td>
                      <td className="center-text">
                        <Badge variant={BadgeColor[item.available]}>
                          {item.available}
                        </Badge>
                      </td>
                      <td className="center-text">
                        {item.available == "YES" ? (
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
