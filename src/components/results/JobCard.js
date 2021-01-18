import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/components/JobCard.css";

export default function JobCard(props) {
  return (
    <Link
      className="card"
      to={`/results/measurements?type=${props.type}&id=${props.data.job_description.measurement_description.key}`}
    >
      <Row>
        <Col md="4">
          <h2>Job {props.index + 1}</h2>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <p>
            Job key : {props.data.job_description.measurement_description.key}
          </p>
        </Col>
        <Col md="4">
          <p>
            Start time :{" "}
            {props.data.job_description.measurement_description.start_time}
          </p>
        </Col>
        <Col md="4">
          <p>
            End time :{" "}
            {props.data.job_description.measurement_description.end_time}
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <p>
            Target :{" "}
            {
              props.data.job_description.measurement_description.parameters
                .target
            }
          </p>
        </Col>
        <Col md="4">
          <p>Node count : {props.data.job_description.node_count}</p>
        </Col>
        <Col md="4">
          <p>Job Interval : {props.data.job_description.job_interval}</p>
        </Col>
      </Row>
    </Link>
  );
}
