import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import ProjectRequests from "./pages/ProjectRequests";
import NewProject from "./pages/NewProject";
import Deliverable from "./pages/Deliverable";
import Supervisors from "./pages/Supervisors";
import Students from "./pages/Students";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <NavigationBar />
        <Container fluid>
          <Router>
            <Row className="mt-5 d-flex justify-content-center">
              <Col lg={2} className="mb-5">
                <Sidebar />
              </Col>
              <Col lg={7}>
                <Switch>
                  <Redirect exact path="/" to="/home" />
                  <Route path="/home" component={Home} exact={true} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/projectrequests" component={ProjectRequests} />
                  <Route path="/createproject" component={NewProject} />
                  <Route path="/deliverable" component={Deliverable} />
                  <Route path="/supervisors" component={Supervisors} />
                  <Route path="/students" component={Students} />
                </Switch>
              </Col>
            </Row>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
