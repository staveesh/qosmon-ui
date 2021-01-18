import { useEffect } from "react";
import { Route } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import MeasurementList from "../components/MeasurementList";
import MeasurementForm from "../components/measurements/MeasurementForm";
import Header from "../components/Header";

export default function Measurement(props) {
  const links = [{ to: "/logout", name: "Log Out" }];

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(props.userState.user));
  });

  const params = [
    {
      path: {
        pathname: "/job/ping",
      },
      name: "Ping",
    },
    {
      path: {
        pathname: "/job/dns_lookup",
      },
      name: "DNS lookup",
    },
    {
      path: {
        pathname: "/job/traceroute",
      },
      name: "Traceroute",
    },
    {
      path: {
        pathname: "/job/http",
      },
      name: "HTTP Download",
    },
    {
      path: {
        pathname: "/job/tcp_speed_test",
      },
      name: "TCP Speed Test",
    },
  ];

  return (
    <div>
      <Header links={links} />
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md="3">
            <MeasurementList loc={props.location} params={params} />
          </Col>
          <Col md="9">
            <Route
              exact
              path={["/job", "/job/ping"]}
              render={(type) => (
                <MeasurementForm
                  {...type}
                  jwt={props.userState.user.jwt}
                  email={props.userState.user.email}
                />
              )}
            />
            <Route
              path="/job/dns_lookup"
              render={(type) => (
                <MeasurementForm
                  {...type}
                  jwt={props.userState.user.jwt}
                  email={props.userState.user.email}
                />
              )}
            />
            <Route
              path="/job/traceroute"
              render={(type) => (
                <MeasurementForm
                  {...type}
                  jwt={props.userState.user.jwt}
                  email={props.userState.user.email}
                />
              )}
            />
            <Route
              path="/job/http"
              render={(type) => (
                <MeasurementForm
                  {...type}
                  jwt={props.userState.user.jwt}
                  email={props.userState.user.email}
                />
              )}
            />
            <Route
              path="/job/tcp_speed_test"
              render={(type) => (
                <MeasurementForm
                  {...type}
                  jwt={props.userState.user.jwt}
                  email={props.userState.user.email}
                />
              )}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
