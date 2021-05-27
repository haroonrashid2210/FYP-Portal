import React from "react";
import {
  Col,
  Container,
  Row,
  Card,
  Button,
  Form,
  Badge,
} from "react-bootstrap";
import { withRouter } from "react-router";
import { BadgeColor } from "./Home";

class Deliverable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { location } = this.props;
    return (
      <Container fluid>
        <Row className="mb-5">
          <Col>
            <Card>
              <Card.Header>
                <Row>
                  <Col>
                    {location.state.title}
                    <Badge
                      variant={BadgeColor[location.state.status]}
                      className="ml-lg-2"
                    >
                      {location.state.status}
                    </Badge>
                  </Col>
                  <Col className="d-flex justify-content-end">
                    Due: {location.state.due.toLocaleDateString()}
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Card.Title>Evaluation Result</Card.Title>
                <Card.Subtitle>
                  {location.state.status === "Active" ? (
                    <Badge variant={"secondary"} className="mb-4">
                      Not Available
                    </Badge>
                  ) : (
                    <Badge
                      variant={BadgeColor[location.state.result]}
                      className="mb-4"
                    >
                      {location.state.result}
                    </Badge>
                  )}
                </Card.Subtitle>

                {location.state.status === "Submitted" ? (
                  <Card.Text>
                    Student should focus on their own work instead of what is
                    done by APIs, Do not leave open the number of commands for
                    formatting.
                  </Card.Text>
                ) : (
                  <></>
                )}
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col className="d-flex justify-content-start">
                    <Form.File
                      id="custom-file"
                      label="Custom file input"
                      className=""
                      custom
                    />
                  </Col>
                  <Col className="d-flex justify-content-end">
                    {location.state.status === "Active" ? (
                      <Button variant="outline-secondary" size="sm">
                        Submit
                      </Button>
                    ) : (
                      <Button variant="outline-secondary" size="sm">
                        Resubmit
                      </Button>
                    )}
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Deliverable);
