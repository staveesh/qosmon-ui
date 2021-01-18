import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import "../styles/pages/results.css";
import MeasurementList from "../components/MeasurementList";
import JobResult from "../components/results/JobResult";

export default function Results(props) {
  const links = [{ to: "/logout", name: "Log Out" }];

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(props.userState.user));
  });

  const params = [
    {
      path: {
        pathname: "/results/ping",
      },
      name: "Ping",
    },
    {
      path: {
        pathname: "/results/dns_lookup",
      },
      name: "DNS lookup",
    },
    {
      path: {
        pathname: "/results/traceroute",
      },
      name: "Traceroute",
    },
    {
      path: {
        pathname: "/results/http",
      },
      name: "HTTP Download",
    },
    {
      path: {
        pathname: "/results/tcp_speed_test",
      },
      name: "TCP Speed Test",
    },
  ];

  return (
    <BrowserRouter>
      <Header links={links} />
      <Container style={{ marginTop: "70px", textAlign: "center" }}>
        <Row>
          <Col md="3">
            <MeasurementList params={params} />
          </Col>
          <Col md="9">
            <Switch>
              <Route
                path="/results"
                render={(type) => (
                  <JobResult {...type} jwt={props.userState.user.jwt} />
                )}
              />
              <Route
                path="/results/dns_lookup"
                render={(type) => (
                  <JobResult {...type} jwt={props.userState.user.jwt} />
                )}
              />
              <Route
                path="/results/traceroute"
                render={(type) => (
                  <JobResult {...type} jwt={props.userState.user.jwt} />
                )}
              />
              <Route
                path="/results/http"
                render={(type) => (
                  <JobResult {...type} jwt={props.userState.user.jwt} />
                )}
              />
              <Route
                path="/results/tcp_speed_test"
                render={(type) => (
                  <JobResult {...type} jwt={props.userState.user.jwt} />
                )}
              />
            </Switch>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}
