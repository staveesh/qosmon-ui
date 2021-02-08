import { Link } from "react-router-dom";
import "../styles/pages/research.css";
import { Row, Container, Col } from "react-bootstrap";

export default function Research() {
  return (
    <Container>
      <Row className="holder">
        <Col md="4">
          <div className="linkContainer">
            <Link to={"/job"}>
              <img
                className="image"
                src={process.env.REACT_APP_PUBLIC_URL + "/images/schedule.png"}
                alt="Run Experiments"
              />
              <br />
              <span className="imgText">Schedule Experiments</span>
            </Link>
          </div>
        </Col>
        <Col md="4">
          <div className="linkContainer">
            <Link to={"/results"}>
              <img
                className="image"
                src={process.env.REACT_APP_PUBLIC_URL + "/images/results.png"}
                alt="View Experiment Results"
              />
              <br />
              <span className="imgText">View Experiment Results</span>
            </Link>
          </div>
        </Col>
        <Col md="4">
          <div className="linkContainer">
            <Link to="/usage">
              <img
                className="image"
                src={process.env.REACT_APP_PUBLIC_URL + "/images/usage.png"}
                alt="View App Usage"
              />
              <br />
              <span className="imgText">View App Usage</span>
            </Link>
          </div>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <div className="linkContainer">
            <Link to="/nodes">
              <img
                className="image"
                src={process.env.REACT_APP_PUBLIC_URL + "/images/health.png"}
                alt="Monitor nodes"
              />
              <br />
              <span className="imgText">Monitor nodes</span>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
