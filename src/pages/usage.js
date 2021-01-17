import { useState, useEffect } from "react";
import "../styles/pages/usage.css";
import NetworkUsage from "../components/usage/NetworkUsage";
import PieChartNetUsage from "../components/usage/charts/PieChartNetUsage";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../components/Header";

export default function Usage(props) {
  const [data, setData] = useState([
    {
      name: "com.facebook.xyz",
      tx: 50,
      rx: 60,
    },
    {
      name: "com.twitter.xyz",
      tx: 150,
      rx: 80,
    },
    {
      name: "com.youtube.xyz",
      tx: 310,
      rx: 200,
    },
    {
      name: "com.netflix.xyz",
      tx: 500,
      rx: 160,
    },
    {
      name: "com.amazon.xyz",
      tx: 200,
      rx: 350,
    },
  ]);

  const links = [{ to: "/logout", name: "Log Out" }];

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(props.userState.user));
  });

  return (
    <Container>
      <Header links={links} />
      <Row className="layout">
        <Row className="justify-content-md-center">
          <h1>App Usage</h1>
        </Row>
        <Row>
          <Col md="4">
            <NetworkUsage data={data} />
          </Col>
          <Col md="8" className="chartWrapper">
            <div className="pieChart">
              <h3>Upload</h3>
              <PieChartNetUsage data={data} dataKey="tx" />
            </div>
            <div className="pieChart">
              <h3>Download</h3>
              <PieChartNetUsage data={data} dataKey="rx" />
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
