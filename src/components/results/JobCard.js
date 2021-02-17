import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/components/JobCard.css";
import moment from "moment";

export default function JobCard(props) {
  return (
    <Link
      className="card"
      to={`/results/measurements/${props.type}/${props.data.jobDescription.measurementDescription.key}`}
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
            {props.data.jobDescription.measurementDescription.key}
          </p>
        </Col>
        <Col md="4">
          <p>
            <strong>Start time : </strong>
            {moment(props.data.jobDescription.measurementDescription.startTime).format("lll")}
          </p>
        </Col>
        <Col md="4">
          <p>
            <strong>End time : </strong>
            {moment(props.data.jobDescription.measurementDescription.endTime).format("lll")}
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <p>
            <strong>Target : </strong>
            {props.data.jobDescription.measurementDescription.parameters.target}
          </p>
        </Col>
        <Col md="4">
          <p>
            <strong> Node count : </strong>{" "}
            {props.data.jobDescription.nodeCount}
          </p>
        </Col>
        <Col md="4">
          <p>
            <strong>Job Interval : </strong>
            {`${props.data.jobDescription.jobInterval.jobIntervalHr} hr ${props.data.jobDescription.jobInterval.jobIntervalMin} min ${props.data.jobDescription.jobInterval.jobIntervalSec} sec`}
          </p>
        </Col>
      </Row>
    </Link>
  );
}
