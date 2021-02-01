import React, { useState, useRef, Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function MeasurementForm(props) {
  const [start_date, setStartDate] = useState("");
  const [start_time, setStartTime] = useState("");
  const [end_date, setEndDate] = useState("");
  const [end_time, setEndTime] = useState("");
  const interval_sec = 1;
  const count = 1;
  const [priority, setPriority] = useState(5);
  const [target, setTarget] = useState("");
  const [node_count, setNodeCount] = useState("");
  const [job_interval, setJobInterval] = useState("");
  const [tcp_speed_test, setTcpSpeedTest] = useState("down");
  const measurementForm = useRef(null);

  const getTimestamp = (d, t) => {
    return `${d}T${t}:00.000Z`;
  };

  const getJobKey = () => {
    return (
      Math.random().toString(36).substring(2, 16) +
      Math.random().toString(36).substring(2, 16)
    );
  };

  const notify = (message, isSuccess) => {
    if (isSuccess) {
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error(message, {
        position: toast.POSITION_TOP_CENTER,
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let payload = {
      job_description: {
        measurement_description: {
          type: props.type,
          key: getJobKey(),
          start_time: getTimestamp(start_date, start_time),
          end_time: getTimestamp(end_date, end_time),
          count: count,
          interval_sec: interval_sec,
          priority: priority,
          parameters: {
            target: target,
            server: "null",
            direction: tcp_speed_test,
          },
        },
        node_count: node_count,
        job_interval: job_interval,
      },
      request_type: "SCHEDULE_MEASUREMENT",
      user_id: props.email,
    };
    props.onFormSubmit(
      payload,
      () => {
        notify("Job Scheduled", true);
      },
      (message) => {
        notify(message, false);
      }
    );
    // measurementForm.current.reset();
  };

  const TcpForm = (
    <Form.Group controlId="tcpRadio">
      <Form.Check
        inline
        type="radio"
        id="tcpRadioUp"
        label="Uplink"
        checked={tcp_speed_test === "up"}
        onChange={(e) => setTcpSpeedTest("up")}
        required
      />
      <Form.Check
        inline
        type="radio"
        id="tcpRadioDown"
        label="Downlink"
        checked={tcp_speed_test === "down"}
        onChange={(e) => setTcpSpeedTest("down")}
        required
      />
    </Form.Group>
  );

  const AddressForm = (
    <Form.Group controlId="address">
      <Form.Label> Web Address </Form.Label>
      <Form.Control
        type="text"
        placeholder="www.example.com"
        onChange={(e) => setTarget(e.target.value)}
        required
      />
    </Form.Group>
  );
  let measurement = null;
  switch (props.type) {
    case "ping":
      measurement = "Ping";
      break;
    case "dns_lookup":
      measurement = "DNS Lookup";
      break;
    case "traceroute":
      measurement = "Traceroute";
      break;
    case "http":
      measurement = "HTTP Download";
      break;
    case "tcp_speed_test":
      measurement = "TCP Speed Test";
      break;
    default:
      break;
  }
  return (
    <Fragment>
      <h2>Schedule : {measurement}</h2>
      <br />
      <Form onSubmit={onSubmit} ref={measurementForm}>
        <Form.Row>
          <Form.Group as={Col} controlId="nodeCount">
            <Form.Label>Node Count </Form.Label>
            <Form.Control
              type="number"
              placeholder="Node Count"
              onChange={(e) => setNodeCount(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="jobInterval">
            <Form.Label>Job Interval </Form.Label>
            <Form.Control
              type="number"
              placeholder="Job Interval"
              onChange={(e) => setJobInterval(e.target.value)}
              required
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="priority">
          <Form.Label>Priority</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Form.Control>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="startDate">
            <Form.Label>Start Date </Form.Label>
            <Form.Control
              type="date"
              placeholder="Start Date"
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="startTime">
            <Form.Label>Start Time </Form.Label>
            <Form.Control
              type="time"
              placeholder="Start Time"
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="endDate">
            <Form.Label>End Date </Form.Label>
            <Form.Control
              type="date"
              placeholder="End Date"
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="startTime">
            <Form.Label>End Time </Form.Label>
            <Form.Control
              type="time"
              placeholder="End Time"
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </Form.Group>
        </Form.Row>

        {props.type === "tcp_speed_test" ? TcpForm : AddressForm}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <ToastContainer autoClose={3000} />
    </Fragment>
  );
}
