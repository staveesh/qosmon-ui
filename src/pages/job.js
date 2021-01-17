import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import MeasurementList from "../components/measurements/MeasurementList";
import MeasurementForm from "../components/measurements/MeasurementForm";
import Header from "../components/Header";

export default function Measurement(props) {
  const location = useLocation();
  const measurement = location.query.measurement;
  const links = [{ to: "/logout", name: "Log Out" }];

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(props.userState.user));
  });

  let title = "Measurement";
  switch (measurement) {
    case "ping":
      title = "Ping Test";
      break;
    case "dns_lookup":
      title = "DNS Lookup Test";
      break;
    case "traceroute":
      title = "Traceroute Test";
      break;
    case "http":
      title = "HTTP Test";
      break;
    case "tcp_speed_test":
      title = "TCP Speed Test";
      break;
    default:
      title = "Please select a measurement";
      break;
  }
  return (
    <div>
      <Header links={links} />
      <Container style={{ marginTop: "70px" }}>
        <Row>
          <Col md="3">
            <MeasurementList active={measurement} />
          </Col>
          <Col md="9">
            <h3>{title}</h3>
            <br></br>
            <MeasurementForm type={measurement} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
