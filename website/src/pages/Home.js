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
} from "react-bootstrap";
import { Link } from "react-router-dom";

const BadgeColor = {
  Submitted: "success",
  Unsubmitted: "danger",
  Active: "primary",
  Accepted: "success",
  Rejected: "danger",
  Inactive: "secondary",
  YES: "success",
  NO: "secondary",
  true: "success",
  false: "secondary",
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DATA: [
        {
          id: 1,
          title: "FYP Scope Document",
          due: new Date(2020, 9, 18),
          status: "Submitted",
          result: "Accepted",
        },
        {
          id: 2,
          title: "FYP Scope and SRS Document",
          due: new Date(2020, 11, 17),
          status: "Submitted",
          result: "Accepted",
        },
        {
          id: 3,
          title: "SDS and 40% Implementation",
          due: new Date(2020, 12, 30),
          status: "Submitted",
          result: "Accepted",
        },
        {
          id: 4,
          title: "60% Evaluation",
          due: new Date(2021, 3, 26),
          status: "Submitted",
          result: "Accepted",
        },
        {
          id: 5,
          title: "100 % Implementation Presentations",
          due: new Date(2021, 5, 30),
          status: "Active",
          result: "",
        },
      ],
    };
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Card>
              <Card.Header>Deliverables</Card.Header>
              <Table hover size="sm" responsive className="myTable mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Due</th>
                    <th className="txt-align-c">Status</th>
                    <th className="txt-align-c">Result</th>
                    <th className="txt-align-c">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.DATA.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.due.toLocaleDateString()}</td>
                      <td className="txt-align-c">
                        <Badge variant={BadgeColor[item.status]}>
                          {item.status}
                        </Badge>
                      </td>
                      <td className="txt-align-c">
                        <Badge variant={BadgeColor[item.result]}>
                          {item.result}
                        </Badge>
                      </td>
                      <td className="txt-align-c">
                        {item.status === "Inactive" ? (
                          <></>
                        ) : (
                          <Badge
                            variant="light"
                            as={Link}
                            to={{ pathname: "/deliverable", state: item }}
                          >
                            view
                          </Badge>
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

export default Home;
export { BadgeColor };
