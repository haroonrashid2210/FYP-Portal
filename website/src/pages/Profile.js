import React from "react";
import { Col, Container, Row, Card, Button, Form } from "react-bootstrap";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container fluid>
        <Row className="mb-5">
          <Col>
            <Card>
              <Card.Header>Profile</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Row style={{ marginBottom: 5 }}>
                      <Form.Label column lg={2}>
                        Name
                      </Form.Label>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Haroon Rashid"
                          disabled
                          size="sm"
                        />
                      </Col>
                    </Form.Row>
                    <Form.Row style={{ marginBottom: 5 }}>
                      <Form.Label column lg={2}>
                        Reg no.
                      </Form.Label>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="FA17-BCS-030"
                          disabled
                          size="sm"
                        />
                      </Col>
                    </Form.Row>

                    <Form.Row style={{ marginBottom: 5 }}>
                      <Form.Label column lg={2}>
                        Project
                      </Form.Label>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Auditor.JS"
                          disabled
                          size="sm"
                        />
                      </Col>
                    </Form.Row>

                    <Form.Row style={{ marginBottom: 5 }}>
                      <Form.Label column lg={2}>
                        Supervisor
                      </Form.Label>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Ms. Saneeha Aamir"
                          disabled
                          size="sm"
                        />
                      </Col>
                    </Form.Row>

                    <Form.Row style={{ marginBottom: 5 }}>
                      <Form.Label column lg={2}>
                        Contact No.
                      </Form.Label>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="0900 78601"
                          size="sm"
                        />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                </Form>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-end">
                <Button variant="outline-secondary" size="sm" to="/creategroup">
                  Update
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;
