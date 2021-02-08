import { Container } from "react-bootstrap";
import { fetchAllNodes } from "../redux/actions/nodesActionCreator";
import { connect } from "react-redux";
import { useEffect } from "react";
import NodeStats from "../components/nodes/NodeStats";

const Nodes = ({ nodeState, dispatchFetchNodesAction }) => {
  useEffect(() => {
    dispatchFetchNodesAction();
  }, [dispatchFetchNodesAction]);
  return (
    <Container style={{ marginTop: "70px"}}>
      {nodeState.deviceIds.map((deviceId) => (
        <NodeStats
          key={deviceId}
          data={nodeState.nodes.filter((node) => node.deviceId === deviceId)}
        />
      ))}
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
