import React from "react";
import { Col, Container, Row, Card, Button, Form } from "react-bootstrap";

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container fluid>
        <Row className="mb-5">
          <Col>
            <Card>
              <Card.Header>Create Project</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control type="text" placeholder="" size="sm" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Project Description</Form.Label>
                    <Form.Control as="textarea" rows={5} size="sm" />
                  </Form.Group>
                </Form>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-end">
                <Button variant="outline-secondary" size="sm" to="/creategroup">
                  Create
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreateGroup;
