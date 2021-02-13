import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/components/JobCard.css";

export default function JobCard(props) {
  return (
    <Link
      className="card"
      to={`/results/measurements/${props.type}/${props.data.job_description.measurement_description.key}`}
    >
      <Row>
        <Col md="4">
          <h2>Job {props.index + 1}</h2>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <p>
            <strong>Job key : </strong>{" "}
            {props.data.job_description.measurement_description.key}
          </p>
        </Col>
        <Col md="4">
          <p>
            <strong>Start time : </strong>
            {props.data.job_description.measurement_description.start_time}
          </p>
        </Col>
        <Col md="4">
          <p>
            <strong>End time : </strong>
            {props.data.job_description.measurement_description.end_time}
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <p>
            <strong>Target : </strong>
            {
              props.data.job_description.measurement_description.parameters
                .target
            }
          </p>
        </Col>
        <Col md="4">
          <p>
            <strong> Node count : </strong>{" "}
            {props.data.job_description.node_count}
          </p>
        </Col>
        <Col md="4">
          <p>
            <strong>Job Interval : </strong>
            {`${props.data.job_description.job_interval.job_interval_hr} hr ${props.data.job_description.job_interval.job_interval_min} min ${props.data.job_description.job_interval.job_interval_sec} sec`}
          </p>
        </Col>
      </Row>
    </Link>
  );
}
