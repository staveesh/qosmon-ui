import { Container, Row, Col } from "react-bootstrap";
import { fetchAllNodes } from "../redux/actions/nodesActionCreator";
import { connect } from "react-redux";
import { useEffect } from "react";
import NodeStats from "../components/nodes/NodeStats";

const Nodes = ({ nodeState, dispatchFetchNodesAction }) => {
  useEffect(() => {
    dispatchFetchNodesAction();
  }, [dispatchFetchNodesAction]);
  return (
    <Container style={{ marginTop: "70px" }}>
      <Row>
        <Col md="8">
          <Container>
            {nodeState.deviceIds.map((deviceId) => (
              <NodeStats
                key={deviceId}
                data={nodeState.nodes.filter(
                  (node) => node.deviceId === deviceId
                )}
              />
            ))}
          </Container>
        </Col>
        <Col
          md="3"
          style={{
            textAlign: "center",
            height: "50%",
            padding: "10px",
            boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <h6>Active now</h6>
          <h1>{nodeState.deviceIds.length}</h1>
        </Col>
      </Row>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  nodeState: state.nodeState,
});
const mapDispatchToProps = (dispatch) => ({
  dispatchFetchNodesAction: () => dispatch(fetchAllNodes()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Nodes);
