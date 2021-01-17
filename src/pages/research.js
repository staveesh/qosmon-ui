import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/research.css";
import { Row, Container, Col } from "react-bootstrap";
import Header from "../components/Header";

export default function Research(props) {
  
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(props.userState.user));
  });

  const links = [{ to: "/logout", name: "Log Out" }];
  return (
    <Container>
      <Header links={links} />
      <Row className="holder">
        <Col md="4">
          <Link to={{ pathname: "/job", query: { measurement: "ping" } }}>
            <img
              className="image"
              src={process.env.REACT_APP_PUBLIC_URL + "/images/experiment.jpg"}
              alt="Run Experiments"
            />
            <span className="imgText">Run Experiments</span>
          </Link>
        </Col>
        <Col md="4">
          <Link to="/results/ping">
            <img
              className="image"
              src={process.env.REACT_APP_PUBLIC_URL + "/images/results.jpg"}
              alt="View Experiment Results"
            />
            <span className="imgText">View Experiment Results</span>
          </Link>
        </Col>
        <Col md="4">
          <Link to="/usage">
            <img
              className="image"
              src={process.env.REACT_APP_PUBLIC_URL + "/images/usage.jpg"}
              alt="View App Usage"
            />
            <span className="imgText">View App Usage</span>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
