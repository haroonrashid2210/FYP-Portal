import React from "react";
import {
  Col,
  Container,
  Row,
  Card,
  Button,
  Table,
  Badge,
} from "react-bootstrap";

class GroupRequests extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container fluid>
        <Row className="mb-5">
          <Col>
            <Card>
              <Card.Header>Requests send</Card.Header>
              <Table hover size="sm" responsive className="myTable mb-0">
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Registration no.</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Osama</td>
                    <td>FA17-BCS-000</td>
                    <td>
                      <a href="">delete</a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header>Requests recieved</Card.Header>
              <Table hover size="sm" responsive className="myTable mb-0">
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Project Leader</th>
                    <th>Supervisor</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>FYP Scope Document</td>
                    <td>13 May 2020</td> <td>N/A</td>
                    <td>
                      <a href="">accept</a> <a href="">reject</a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GroupRequests;
