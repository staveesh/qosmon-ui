import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Route } from "react-router-dom";
import "../styles/pages/results.css";
import MeasurementList from "../components/MeasurementList";
import JobResult from "../components/results/JobResult";
import Ping from "../components/results/Ping";
import DNS from "../components/results/DNS";
import HTTP from "../components/results/HTTP";
import TCP from "../components/results/TCP";

import {
  fetchAllJobs,
  fetchJobResults,
} from "../redux/actions/jobActionCreator";
import { connect } from "react-redux";

const Results = ({
  jobState,
  dispatchFetchJobsAction,
  dispatchFetchJobResultsAction,
  location,
}) => {
  let type = null,
    id = null;
  const path = location.pathname;
  let urlComponents = path.split("/");
  if (urlComponents.length === 2) {
    // /result
    type = "ping";
  } else if (urlComponents.length === 3) {
    // /result/{type}
    type = urlComponents[2];
  } else if (urlComponents.length === 5) {
    // /result/measurements/{type}/{id}
    type = urlComponents[3];
    id = urlComponents[4];
  }
  useEffect(() => {
    dispatchFetchJobsAction({ type });
  }, [dispatchFetchJobsAction, type]);

  useEffect(() => {
    if (id) dispatchFetchJobResultsAction({ type, id });
  }, [dispatchFetchJobResultsAction, type, id]);

  return (
    <Container style={{ marginTop: "70px", textAlign: "center" }}>
      <Row>
        <Col md="3">
          <MeasurementList loc={location} type={type} />
        </Col>
        <Col md="9">
          <Route
            exact
            path={["/results", `/results/${type}`]}
            component={() => <JobResult type={type} {...jobState} />}
          />
          <Route
            path={`/results/measurements/${type}`}
            component={() => {
              switch (type) {
                case "ping":
                  return <Ping data={jobState.jobResult} />;
                case "dns_lookup":
                  return <DNS data={jobState.jobResult} />;
                case "http":
                  return <HTTP data={jobState.jobResult} />;
                case "tcp_speed_test":
                  return <TCP data={jobState.jobResult} />;
                default:
                  break;
              }
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  jobState: state.jobState,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchFetchJobsAction: (params) => dispatch(fetchAllJobs(params)),
  dispatchFetchJobResultsAction: (params) => dispatch(fetchJobResults(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Results);
