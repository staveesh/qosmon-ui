import { Route } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import MeasurementList from "../components/MeasurementList";
import MeasurementForm from "../components/measurements/MeasurementForm";
import { scheduleJob } from "../redux/actions/jobActionCreator";
import { connect } from "react-redux";

const Measurement = ({ email, dispatchScheduleJobsAction, location }) => {
  let path = location.pathname;
  let urlComponents = path.split("/");
  let type = null;
  if (urlComponents.length === 2) {
    // /job
    type = "ping";
  } else if (urlComponents.length === 3) {
    // /job/{type}
    type = urlComponents[2];
  }

  return (
    <Container style={{ marginTop: "70px" }}>
      <Row>
        <Col md="3">
          <MeasurementList loc={location} type={type} schedule />
        </Col>
        <Col md="9">
          <Route
            exact
            path={["/job", `/job/${type}`]}
            render={(props) => (
              <MeasurementForm
                type={type}
                email={email}
                onFormSubmit={dispatchScheduleJobsAction}
              />
            )}
          />
        </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchScheduleJobsAction: (job_description, onSuccess, onError) =>
    dispatch(scheduleJob({ ...job_description }, onSuccess, onError)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, mapDispatchToProps)(Measurement);
